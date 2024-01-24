import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import RoundImg from "../utils/RoundImg";

interface userProps {
  userId: string;
}

function UserItemList({ userId }: userProps) {
  return (
    <UserWrapper>
      <RoundImg src={userImage} size="30px" />
      <UserId>{userId}</UserId>
    </UserWrapper>
  );
}

export default UserItemList;

const UserWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserId = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
`;
