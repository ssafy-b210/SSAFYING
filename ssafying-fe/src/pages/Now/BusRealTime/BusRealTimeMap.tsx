import styled from "styled-components";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import Tmap from "./Tmap";
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { REACT_APP_HOME_URL } from "../../../apis/constants";

type Position = {
  latitude: number; // 위도
  longitude: number; // 경도
};

function BusRealTimeMap() {
  // socket
  let stompClient: any = null;
  let connected = false;
  const [recvList, setRecvList] = useState<any[]>([]);

  const shuttleId = 1;

  // 유저의 현재 위치 좌표
  const [currPosition, setCurrPosition] = useState<Position>({
    latitude: 0,
    longitude: 0,
  });

  // 버스 위치 좌표
  // 테스트 : 1호차 오정동 육교 밑
  const [busPosition, setBusPosition] = useState<Position>({
    latitude: 36.3587785,
    longitude: 127.4126905,
  });

  // 위치 공유 버튼을 눌렀을 때 현재 위치 공유하기
  function handleClickShareLocation() {
    // 현재 위치 좌표 currPosition에 저장
    navigator.geolocation.getCurrentPosition((position) => {
      const currPos = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      setCurrPosition(currPos);

      // 서버에 좌표 보내기
      if (stompClient && stompClient.connected)
        stompClient.send(
          `/pub/location/${shuttleId}`,
          {},
          JSON.stringify(currPos)
        );
    });
  }

  function connection() {
    const serverURL = `${REACT_APP_HOME_URL}/api/ws`;
    const socket = new SockJS(serverURL);
    stompClient = Stomp.over(socket);
    stompClient.debug = () => {}; // 이벤트마다 콘솔 로깅 기록 방지
    console.log(stompClient);
    console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`);

    stompClient.connect(
      {},
      (frame: any) => {
        connected = true;
        console.log("소켓 연결 성공", frame);
        stompClient.subscribe(`/sub/location/${shuttleId}`, (res: any) => {
          console.log("구독으로 받은 메시지 입니다.", res.body);
          recvList.push(JSON.parse(res.body));
        });
      },
      (error: any) => {
        console.log("소켓 연결 실패", error);
        connected = false;
      }
    );
  }

  useEffect(() => {
    connection(); // 소켓 연결
  }, []);

  return (
    <div>
      <BackBtnHeader
        backLink="/shuttle"
        isCenter={true}
        htext={<h3>대전 1호차 위치공유</h3>}
      />
      <MapContainer>
        {/* <Tmap
          currLocation={{
            lat: busPosition.latitude,
            lng: busPosition.longitude,
          }}
          nextLocation={{
            lat: 36.3579,
            lng: 127.396,
          }}
        /> */}
      </MapContainer>
      <button onClick={handleClickShareLocation}>위치공유하기</button>
      <div>{`${currPosition.latitude}, ${currPosition.longitude}`}</div>
    </div>
  );
}

export default BusRealTimeMap;

const MapContainer = styled.div`
  border: 1px solid black;
`;
