import styled from "styled-components";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";

function BusRealTimeMap() {
  function initTmap() {
    // const map = new Tmap2.
  }

  return (
    <div>
      <BackBtnHeader
        backLink="/bus"
        isCenter={true}
        htext={<h3>대전 1호차 위치공유</h3>}
      />
      <MapContainer></MapContainer>
    </div>
  );
}

export default BusRealTimeMap;

const MapContainer = styled.div`
  border: 1px solid black;
`;
