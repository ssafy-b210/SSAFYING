import styled from "styled-components";
import SubmitBtn from "../../../components/Common/SubmitBtn";
import downArrow from "../../../assets/img/imgBtn/downArrow.svg";

function BusRealTimeSelect() {
  // NOTE : 셔틀 버스 이전에 선택한 값 가져오기

  return (
    <Wrapper>
      <h1>셔틀버스 위치공유</h1>
      <SelectContainer>
        <label htmlFor="bus-number-selector">셔틀버스를 선택해주세요.</label>
        <SelectWrapper>
          <select name="number" id="bus-number-selector">
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
      <SubmitBtn text="셔틀 위치 보기" link="1" />
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
