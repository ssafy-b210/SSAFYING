import styled from "styled-components";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import Tmap from "./Tmap";
import { useEffect, useState } from "react";

type Position = {
  latitude: number; // 위도
  longitude: number; // 경도
};

const SOCKET_URL = "ws://localhost:8001"; // 테스트 서버 주소

function BusRealTimeMap() {
  const socket = new WebSocket(SOCKET_URL);

  // 유저의 현재 위치 좌표
  const [currPosition, setCurrPosition] = useState<Position>({
    latitude: 0,
    longitude: 0,
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
      socket.send(JSON.stringify(currPos));
    });
  }

  // 소켓 이벤트 제어
  useEffect(() => {
    socket.onopen = () => {
      console.log("클라이언트 소켓 연결됨");
    };

    socket.onmessage = function (event) {
      console.log(`[message] 서버로부터 전송받은 데이터: ${event.data}`);
    };

    socket.onclose = function () {
      console.log("클라이언트 연결 해제");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <BackBtnHeader
        backLink="/bus"
        isCenter={true}
        htext={<h3>대전 1호차 위치공유</h3>}
      />
      <MapContainer>
        {/* <Tmap /> */}
        {"지도가 들어갈 예정입니다."}
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
