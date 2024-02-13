import styled from "styled-components";
import RoundImg from "../utils/RoundImg";

interface userProps {
  userId: number;
  userNickname: string;
  userImage: string;
}

function UserItem({ userId, userNickname, userImage }: userProps) {
  return (
    <UserWrapper>
      <RoundImg src={userImage} size="30px" />
      <UserId>{userNickname}</UserId>
    </UserWrapper>
  );
}

export default UserItem;

const UserWrapper = styled.div`
  padding: 10px 5px;
  display: flex;
  align-items: center;
`;

const UserId = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
`;
