import styled from "styled-components";
import likeFill from "../../../assets/img/imgBtn/likeFillRed.svg";

interface Props {
  likeCount: number;
}

function FeedLikeCnt({ likeCount }: Props) {
  return (
    <BtnWrapper>
      <Img src={likeFill} />
      <LikeCnt>{likeCount}</LikeCnt>
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
