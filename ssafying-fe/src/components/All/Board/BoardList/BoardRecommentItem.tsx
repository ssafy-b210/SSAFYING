import styled from "styled-components";
import ImgBtn from "../../../Feed/utils/ImgBtn";
import deleteBtn from "../../../../assets/img/imgBtn/deleteBtn.svg";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import { deleteBoardComment } from "../../../../apis/api/Board";

interface RecommentProps {
  commentId: number;
  commentUser: {
    id: number;
    nickname: string;
  };
  content: string;
}

function BoardRecommentItem({
  commentId,
  commentUser,
  content,
}: RecommentProps) {
  const user = useAppSelector(selectUser);

  const onClickDelete = () => {
    deleteBoardComment(commentId);
  };

  return (
    <RecommentWrapper>
      <RecommentContent>
        <UserId>{commentUser.nickname}</UserId>
        <Content>{content}</Content>
      </RecommentContent>
      <ButtonsWrapper>
        {commentUser.id === user.userId && (
          <ImgBtn src={deleteBtn} onClick={onClickDelete} size="12px" />
        )}
      </ButtonsWrapper>
    </RecommentWrapper>
  );
}

export default BoardRecommentItem;

const RecommentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  background-color: #f7f7f7;
  border-radius: 8px;
  margin-top: 4px;
`;

const RecommentContent = styled.div`
  margin-left: 8px;
`;

const UserId = styled.div`
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 12px;
  color: #333;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
