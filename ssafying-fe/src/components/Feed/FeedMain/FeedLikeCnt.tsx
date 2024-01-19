import styled from "styled-components";
import likeFill from "../../../assets/img/imgBtn/likeFillRed.svg";

function FeedLikeCnt() {
  return (
    <BtnWrapper>
      <Img src={likeFill} />
      <div>440</div>
    </BtnWrapper>
  );
}

export default FeedLikeCnt;

const Img = styled.img`
  margin: 0 5px;
  width: 20px;
`;

const BtnWrapper = styled.div`
  padding: 5px;
  font-size: 8px;
`;
