import React from "react";
import { styled } from "styled-components";
import FollowBtn from "../utils/FollowBtn";
import RoundImg from "../utils/RoundImg";
import { Link } from "react-router-dom";

interface RecommendProps {
  recommendItem: { nickname: string; profileImageUrl: string; userId: number };
}

function UserRecommendListItem({ recommendItem }: RecommendProps) {
  return (
    <UserItem>
      <Link to={`/profile/${recommendItem.userId}`} className="home">
        <RoundImg src={recommendItem.profileImageUrl} size="50px" />
      </Link>
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
  font-size: 15px;
`;

export default UserRecommendListItem;
