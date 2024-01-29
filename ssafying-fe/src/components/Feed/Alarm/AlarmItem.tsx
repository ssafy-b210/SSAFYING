import styled from "styled-components";
import RoundImg from "../utils/RoundImg";

interface userProps {
  userId: string;
  userImage: string;
  type: string;
}

function AlarmItem({ userId, userImage, type }: userProps) {
  return (
    <UserWrapper>
      <RoundImg src={userImage} size="30px" />
      <UserId>{userId}</UserId>님이&nbsp;
      {
        {
          like: <p> 회원님의 게시글을 좋아합니다.</p>,
          follow: <p> 회원님을 팔로우합니다.</p>,
          comment: <p> 회원님의 게시글에 댓글을 남겼습니다.</p>,
        }[type]
      }
    </UserWrapper>
  );
}

export default AlarmItem;

const UserWrapper = styled.div`
  padding: 10px 5px;
  display: flex;
  align-items: center;
`;

const UserId = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
`;
