import styled from "styled-components";
import RoundImg from "../utils/RoundImg";
import { Link } from "react-router-dom";

interface userProps {
  userId: number;
  userNickname: string;
  userImage: string;
}

function UserItem({ userId, userNickname, userImage }: userProps) {
  return (
    <UserWrapper>
      <Link to={`/profile/${userId}`} className="home">
        <RoundImg src={userImage} size="30px" />
      </Link>
      <Link to={`/profile/${userId}`} className="home">
        <UserId>{userNickname}</UserId>
      </Link>
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
