import styled from "styled-components";

function BambooForestInfo() {
  return (
    <InfoWrapper>
      <p>24시간 뒤면 사라지는 대나무숲에 나의 고민을 말해보자!</p>
    </InfoWrapper>
  );
}

export default BambooForestInfo;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: white;
  }
`;
