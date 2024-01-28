import styled from "styled-components";
import CommentPlusBtn from "../../../../assets/img/Btn/CommentPlusBtn.svg";
import ImgBtn from "../../../Feed/utils/ImgBtn";

function CommentContainer() {
  const addComment = () => {};

  return (
    <CommentWrapper>
      <Comment>
        <CommentWindowWrapper>
          <CommentWindow placeholder="댓글을 입력해주세요" />
          <StyledImgBtn src={CommentPlusBtn} onClick={addComment} size="20px" />
        </CommentWindowWrapper>
      </Comment>
    </CommentWrapper>
  );
}

export default CommentContainer;

const CommentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 600px;
  border-radius: 20px;
  background-color: #f5f5f5;
  margin: 20px;
`;

const CommentWindowWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
`;

const CommentWindow = styled.input`
  width: 450px;
  border-radius: 20px;
  border: none;
  height: 60px;
`;

const StyledImgBtn = styled(ImgBtn)``;
