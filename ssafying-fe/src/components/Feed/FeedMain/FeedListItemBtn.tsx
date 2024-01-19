import styled from "styled-components";
import likeBtn from "../../../assets/img/like.svg";
import saveBtn from "../../../assets/img/save.svg";
import commentBtn from "../../../assets/img/comment.svg";

function FeedListItemBtn() {
  return (
    <BtnWrapper>
      <div>
        <Img src={likeBtn} />
        <Img src={commentBtn} />
      </div>
      <div>
        <Img src={saveBtn} />
      </div>
    </BtnWrapper>
  );
}

export default FeedListItemBtn;

const Img = styled.img`
  margin: 2px 5px;
`;

const BtnWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
