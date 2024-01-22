import React from "react";
import { styled } from "styled-components";
import FollowBtn from "../utils/FollowBtn";
import userImg from "../../../assets/img/testImg/user5.svg";
import RoundImg from "../utils/RoundImg";

interface Props {
  id: string;
}

function UserRecommendListItem({ id }: Props) {
  return (
    <UserItem>
      <RoundImg src={userImg} size="50px" />
      {id}
      <FollowBtn />
    </UserItem>
  );
}

const UserItem = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 70px;
  height: 100px;
  display: inline-block;
  padding: 10px;
  margin: 5px;
  text-align: center;
`;

export default UserRecommendListItem;
