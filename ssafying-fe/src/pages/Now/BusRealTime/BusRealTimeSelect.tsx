import styled from "styled-components";
import SubmitBtn from "../../../components/Common/SubmitBtn";
import downArrow from "../../../assets/img/imgBtn/downArrow.svg";
import { ChangeEvent, useRef, useState } from "react";

function BusRealTimeSelect() {
  const LS_SHUTTLE_ID_KEY = "shuttle-id";

  let shuttleId = useRef<string>(
    localStorage.getItem(LS_SHUTTLE_ID_KEY) || "1"
  );

  const [selectShuttleId, setSelectedShuttleId] = useState<string>(
    shuttleId.current
  );

  // 셔틀 버스 호차 선택하기
  function handleSelectShuttleId(e: ChangeEvent<HTMLSelectElement>) {
    shuttleId.current = e.target.value;
    setSelectedShuttleId(shuttleId.current);
  }

  // 셔틀 버스 지도로 이동하기 전에 로컬스토리지에 값 저장
  function handleClickEnter() {
    localStorage.setItem(LS_SHUTTLE_ID_KEY, shuttleId.current);
  }

  return (
    <Wrapper>
      <h1>셔틀버스 위치공유</h1>
      <SelectContainer>
        <label htmlFor="bus-number-selector">셔틀버스를 선택해주세요.</label>
        <SelectWrapper>
          <select
            name="number"
            id="bus-number-selector"
            onChange={handleSelectShuttleId}
            value={selectShuttleId}
          >
            <option value="1">1호차</option>
            <option value="2">2호차</option>
            <option value="3">3호차</option>
            <option value="4">4호차</option>
            <option value="5">5호차</option>
            <option value="6">6호차</option>
          </select>
          <div className="down-arrow-icon">
            <img src={downArrow} alt="아래 화살표" />
          </div>
        </SelectWrapper>
      </SelectContainer>
      <SubmitBtn
        text="셔틀 위치 보기"
        link={shuttleId.current}
        onClick={handleClickEnter}
      />
    </Wrapper>
  );
}

export default BusRealTimeSelect;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 50px 0;
    font-size: 26px;
  }

  h2 {
    font-size: 20px;
    margin: 10px 0;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const SelectWrapper = styled.div`
  position: relative;

  select {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 10px;
    font-size: 14px;
    font-family: "Noto Sans KR", "Noto Sans", sans-serif;
    border-radius: 5px;
    outline: none;
    appearance: none;
    box-sizing: border-box;
  }

  .down-arrow-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;
