import React from "react";
import { styled } from "styled-components";
import FollowBtn from "../utils/FollowBtn";
import userImg from "../../../assets/img/testImg/user5.svg";

interface Props {
  id: string;
}

function UserRecommendListItem({ id }: Props) {
  return (
    <UserItem>
      <Img src={userImg} />
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

const Img = styled.img`
  width: 50px;
  border-radius: 50%;
`;

export default UserRecommendListItem;
