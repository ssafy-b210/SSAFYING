import styled from "styled-components";
import UserItem from "../utils/UserItem";

interface userProps {
  userList: {
    userId: string;
    userImage: string;
  }[];
}

function UserItemList({ userList }: userProps) {
  return (
    <>
      {userList.map((user) => (
        <UserItem
          key={user.userId}
          userId={user.userId}
          userImage={user.userImage}
        />
      ))}
    </>
  );
}

export default UserItemList;
