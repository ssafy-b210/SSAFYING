import styled from "styled-components";
import ImgBtn from "../../../Feed/utils/ImgBtn";
import deleteBtn from "../../../../assets/img/imgBtn/deleteBtn.svg";
import BoardRecommentList from "./BoardRecommentList";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import { deleteBoardComment } from "../../../../apis/api/Board";

interface CommentProps {
  commentId: number;
  nickname: string;
  userId: number;
  content: string;
  isHighlighted: boolean;
  time: string;
  profile: string;
  onClick: () => void;
  replies: any[];
  onDelete: (id: number) => void;
}

function BoardCommentItem({
  commentId,
  nickname,
  userId,
  content,
  isHighlighted,
  time,
  profile,
  onClick,
  replies,
  onDelete,
}: CommentProps) {
  const user = useAppSelector(selectUser);

  async function clickDeleteBtn() {
    onDelete(commentId);
  }
  return (
    <>
      <UserWrapper isHighlighted={isHighlighted} onClick={onClick}>
        <CommentContent>
          <UserId>{nickname}</UserId>
          <Content>{content}</Content>
        </CommentContent>
        <ButtonsWrapper>
          <TextBtn onClick={onClick}>답글달기</TextBtn>
          {userId === user.userId && (
            <ImgBtn src={deleteBtn} onClick={clickDeleteBtn} size="15px" />
          )}
        </ButtonsWrapper>
      </UserWrapper>
      {replies && <BoardRecommentList replies={replies} onDelete={onDelete} />}
    </>
  );
}

export default BoardCommentItem;

const UserWrapper = styled.div<{ isHighlighted: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-top: 5px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isHighlighted ? "#f2f9f1" : "transparent"};
`;

const CommentContent = styled.div`
  margin-left: 8px;
`;

const UserId = styled.div`
  font-weight: bold;
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
