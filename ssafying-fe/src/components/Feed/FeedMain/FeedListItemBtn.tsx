import styled from "styled-components";
import likeBtn from "../../../assets/img/imgBtn/like.svg";
import saveBtn from "../../../assets/img/imgBtn/save.svg";
import commentBtn from "../../../assets/img/imgBtn/comment.svg";
import FeedLikeCnt from "./FeedLikeCnt";

function FeedListItemBtn() {
  return (
    <BtnWrapper>
      <div>
        <Img src={likeBtn} />
        <Img src={commentBtn} />
        <Img src={saveBtn} />
      </div>
      <FeedLikeCnt />
    </BtnWrapper>
  );
}

export default FeedListItemBtn;

const Img = styled.img`
  margin: 3px 7px;
  height: 22px;
`;

const BtnWrapper = styled.div`
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;
