import React from "react";
import { styled } from "styled-components";
import FollowBtn from "../utils/FollowBtn";
import userImg from "../../../assets/img/testImg/user5.jpg";
import RoundImg from "../utils/RoundImg";

interface RecommendProps {
  recommendItem: { nickname: string; profileImageUrl: string };
}

function UserRecommendListItem({ recommendItem }: RecommendProps) {
  return (
    <UserItem>
      <RoundImg src={recommendItem.profileImageUrl} size="50px" />
      {recommendItem.nickname}
      <FollowBtn />
    </UserItem>
  );
}

const UserItem = styled.div`
  border-radius: 10px;
  width: 70px;
  min-height: 100px;
  display: inline-block;
  padding: 10px;
  margin: 5px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
  color: #4b4b4b;
`;

export default UserRecommendListItem;
