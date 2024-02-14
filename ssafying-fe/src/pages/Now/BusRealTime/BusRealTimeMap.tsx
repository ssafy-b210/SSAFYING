import styled from "styled-components";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import Tmap from "./Tmap";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { REACT_APP_HOME_URL } from "../../../apis/constants";
import { selectBusStopList } from "../../../apis/api/Bus";
import { useParams } from "react-router-dom";
import arrowToDown from "../../../assets/img/imgBtn/arrowToDown.svg";

type Location = {
  latitude: number; // 위도
  longitude: number; // 경도
};

type Message = Location & {
  shuttleId: number;
};

type BusStop = {
  arrivalAt: string;
  busStopName: string;
  latitude: number;
  longitude: number;
};

function BusRealTimeMap() {
  const SOCKET_SERVER_URL = `${REACT_APP_HOME_URL}/api/ws`; // 소켓 통신 url
  const SHUTTLE_ID = Number(useParams().shuttleId); // 셔틀 버스 호차

  // socket
  const stompClient = useRef<any>(null); // useRef 사용
  let connected = false;
  const [recvList, setRecvList] = useState<any[]>([]);

  // 정류장 리스트
  const [busStopList, setBusStopList] = useState<BusStop[]>([]);

  // 현재 위치 좌표
  const [currLocation, setCurrLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  //arrivalAt을 시간 형식으로 바꾸기
  const formatTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours.padStart(2, "0");
    const formattedMinutes = minutes.padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  };

  const formatArrivalTime = (arrivalTime: string): string => {
    return formatTime(arrivalTime);
  };

  useEffect(() => {
    connection();
    getBusStopList();
  }, []);

  function connection() {
    const socket = new SockJS(SOCKET_SERVER_URL);
    stompClient.current = Stomp.over(socket);

    // stompClient.debug = () => {}; // 이벤트마다 콘솔 로깅 기록 방지
    console.log(stompClient);
    console.log(`소켓 연결을 시도합니다. 서버 주소: ${SOCKET_SERVER_URL}`);

    stompClient.current.connect({}, onConnected, onError);
  }

  // 소켓 통신 시작
  function onConnected() {
    connected = true;
    console.log("소켓 연결 성공");

    // 구독, 메세지 수신 콜백, 에러 콜백
    stompClient.current.subscribe(
      `/sub/location/${SHUTTLE_ID}`,
      onMessageReceived
    );
  }

  // 메세지 수신 콜백
  function onMessageReceived(payload: any) {
    const message = JSON.parse(payload.body);
    recvList.push(message);

    setCurrLocation({
      latitude: message.latitude,
      longitude: message.longitude,
    });

    console.log("구독으로 받은 메시지 입니다.", message);
  }

  // 에러 콜백
  function onError(error: any) {
    console.log("소켓 연결 실패", error);
    connected = false;
  }

  // 버스 정류장 조회
  async function getBusStopList() {
    const response = await selectBusStopList(SHUTTLE_ID);
    setBusStopList(response);
  }

  // 메세지 송신 - 현재 유저 위치 좌표값
  async function sendLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (positon) => {
          const location: Location = {
            latitude: positon.coords.latitude,
            longitude: positon.coords.longitude,
          };

          const message: Message = {
            shuttleId: SHUTTLE_ID,
            latitude: location.latitude,
            longitude: location.longitude,
          };

          // 서버에 좌표 보내기
          if (stompClient.current && stompClient.current.connected) {
            stompClient.current.send(
              `/pub/location/${SHUTTLE_ID}`,
              {},
              JSON.stringify(message)
            );

            setCurrLocation(location);

            console.log("서버로 메시지를 보냈습니다.", message);
          }
        },
        (error) => {
          alert("Error occurred. Error code: " + error.code);
        },
        { timeout: 3000 }
      );
    } else {
      alert("위치 액세스를 지원하지 않는 환경입니다.");
    }
  }

  return (
    <div>
      <BackBtnHeader
        backLink="/shuttle"
        isCenter={true}
        htext={<h3>대전 1호차 위치공유</h3>}
      />
      <MapContainer>
        {currLocation.latitude > 0 && currLocation.longitude > 0 ? (
          <Tmap
            currLocation={{
              lat: currLocation.latitude,
              lng: currLocation.longitude,
            }}
            nextLocation={{
              lat: busStopList[0].latitude,
              lng: busStopList[0].longitude,
            }}
          />
        ) : null}
      </MapContainer>
      <ButtonWrapper>
        <Button onClick={sendLocation}>📍 위치공유하기</Button>
      </ButtonWrapper>
      {busStopList.map((item) => (
        <BusWrapper>
          <BusInfo>
            <InfoDetail>{item.busStopName}</InfoDetail>
            <InfoDetail>
              {formatArrivalTime(item.arrivalAt)}에 도착예정!
            </InfoDetail>
            {/* <InfoDetail>{item.latitude}</InfoDetail> */}
            {/* <InfoDetail>{item.longitude}</InfoDetail> */}
            <img src={arrowToDown} alt="arrow" />
          </BusInfo>
        </BusWrapper>
      ))}
      <Ssafy>싸피 도착!</Ssafy>
    </div>
  );
}

export default BusRealTimeMap;

const MapContainer = styled.div`
  border: 1px solid black;
`;

const Button = styled.button`
  font-family: "Noto Sans KR", "Noto Sans", sans-serif;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 150px;
  height: 50px;
  font-size: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const BusWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const BusInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  margin: 18px;
  border-radius: 20px;
  padding: 10px;
  width: 330px;
  height: 70px;
  justify-content: center;
  text-align: center;
  align-items: center;
  img {
    padding: 33px;
  }
`;

const InfoDetail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;
`;

const Ssafy = styled.p`
  text-align: center;
`;
