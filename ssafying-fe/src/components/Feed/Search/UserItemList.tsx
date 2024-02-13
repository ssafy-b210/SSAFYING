import styled from "styled-components";
import UserItem from "../utils/UserItem";

interface userProps {
  userList: any[];
}

function UserItemList({ userList }: userProps) {
  return (
    <>
      {userList.map((user) => (
        <UserItem
          key={user.userId}
          userId={user.userId}
          userNickname={user.userNickname}
          userImage={user.userImage}
        />
      ))}
    </>
  );
}

export default UserItemList;
