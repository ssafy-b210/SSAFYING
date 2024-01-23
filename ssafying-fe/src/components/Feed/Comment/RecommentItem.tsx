import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";
import deleteBtn from "../../../assets/img/imgBtn/deleteBtn.svg";

interface RecommentProps {
  userId: string;
  content: string;
  onClickDelete: () => void;
}

function RecommentItem({ userId, content, onClickDelete }: RecommentProps) {
  return (
    <RecommentWrapper>
      <RoundImg src={userImage} size="28px" />
      <RecommentContent>
        <UserId>{userId}</UserId>
        <Content>{content}</Content>
      </RecommentContent>
      <ImgBtn src={deleteBtn} onClick={onClickDelete} size="12px" />
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