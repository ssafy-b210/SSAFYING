import styled from "styled-components";
import deleteBtn from "../../../assets/img/imgBtn/deleteBtn.svg";
import ImgBtn from "../../Feed/utils/ImgBtn";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { deleteBambooComment } from "../../../apis/api/Forest";

interface CommentProps {
  commentId: number;
  content: string;
  userId: number;
}

function BambooCommentItem({ commentId, content, userId }: CommentProps) {
  const user = useAppSelector(selectUser);

  async function clickDeleteBtn() {
    await deleteBambooComment(commentId);
  }

  return (
    <>
      <UserWrapper>
        <CommentContent>
          <Content>{content}</Content>
        </CommentContent>
        <ButtonsWrapper>
          {userId === user.userId && (
            <ImgBtn src={deleteBtn} onClick={clickDeleteBtn} size="15px" />
          )}
        </ButtonsWrapper>
      </UserWrapper>
    </>
  );
}

export default BambooCommentItem;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 8px;
`;

const CommentContent = styled.div`
  margin-left: 8px;
`;

const Content = styled.div`
  font-size: 14px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const TextBtn = styled.div`
  font-size: 12px;
  color: #385185;
  cursor: pointer;
  margin-right: 10px;
`;
