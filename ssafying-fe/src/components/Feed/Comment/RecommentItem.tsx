import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.jpg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";
import deleteBtn from "../../../assets/img/imgBtn/deleteBtn.svg";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

interface RecommentProps {
  commentId: number;
  nickname: string;
  content: string;
  onClickDelete: () => void;
}

function RecommentItem({
  commentId,
  nickname,
  content,
  onClickDelete,
}: RecommentProps) {
  const user = useAppSelector(selectUser);
  return (
    <RecommentWrapper>
      <RoundImg src={userImage} size="28px" />
      <RecommentContent>
        <UserId>{nickname}</UserId>
        <Content>{content}</Content>
      </RecommentContent>
      <ButtonsWrapper>
        {commentId === user.userId && (
          <ImgBtn src={deleteBtn} onClick={onClickDelete} size="12px" />
        )}
      </ButtonsWrapper>
    </RecommentWrapper>
  );
}

export default RecommentItem;

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
