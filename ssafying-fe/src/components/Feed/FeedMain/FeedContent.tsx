import styled from "styled-components";
import likeFill from "../../../assets/img/likefill.svg";

function FeedLikeCnt() {
  return (
    <BtnWrapper>
      <Img src={likeFill} />
      <span>Like by 440</span>
    </BtnWrapper>
  );
}

export default FeedLikeCnt;

const Img = styled.img`
  margin: 0 5px;
  width: 15px;
`;

const BtnWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  font-size: 10px;
`;
