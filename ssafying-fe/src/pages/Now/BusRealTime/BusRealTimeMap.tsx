import styled from "styled-components";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import Tmap from "./Tmap";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { REACT_APP_HOME_URL } from "../../../apis/constants";
import { selectBusStopList } from "../../../apis/api/Bus";
import { useParams } from "react-router-dom";

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
              lat: 36.3579,
              lng: 127.396,
            }}
          />
        ) : null}
      </MapContainer>
      <button onClick={sendLocation}>위치공유하기</button>
    </div>
  );
}

export default BusRealTimeMap;

const MapContainer = styled.div`
  border: 1px solid black;
`;
