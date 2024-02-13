import styled from "styled-components";
import UserItem from "../utils/UserItem";
import { Link } from "react-router-dom";

interface userProps {
  userList: any[];
}

function UserItemList({ userList }: userProps) {
  return (
    <UserItemWrapper>
      {userList.map((user) => (
        <Link to={`/profile/${user.id}`} className="home">
          <UserItem
            key={user.id}
            userId={user.id}
            userNickname={user.nickname}
            userImage={user.profileImageUrl}
          />
        </Link>
      ))}
    </UserItemWrapper>
  );
}

export default UserItemList;

const UserItemWrapper = styled.div`
  a {
    text-decoration-line: none;
    color: black;
  }
`;
