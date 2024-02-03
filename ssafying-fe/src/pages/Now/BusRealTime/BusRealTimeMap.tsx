import styled from "styled-components";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import Tmap from "./Tmap";

function BusRealTimeMap() {
  return (
    <div>
      <BackBtnHeader
        backLink="/bus"
        isCenter={true}
        htext={<h3>대전 1호차 위치공유</h3>}
      />
      <MapContainer>
        <Tmap />
      </MapContainer>
    </div>
  );
}

export default BusRealTimeMap;

const MapContainer = styled.div`
  border: 1px solid black;
`;
