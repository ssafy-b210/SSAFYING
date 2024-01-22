import styled from "styled-components";
import likeFill from "../../../assets/img/imgBtn/likeFillRed.svg";

function FeedLikeCnt() {
  return (
    <BtnWrapper>
      <Img src={likeFill} />
      <LikeCnt>440</LikeCnt>
    </BtnWrapper>
  );
}

export default FeedLikeCnt;

const Img = styled.img`
  margin: 0 2px;
  width: 20px;
`;

const LikeCnt = styled.div`
  margin: 0 5px;
`;

const BtnWrapper = styled.div`
  padding: 5px;
  font-size: 10px;
`;
