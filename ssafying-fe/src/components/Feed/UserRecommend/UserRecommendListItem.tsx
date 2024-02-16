import React from "react";
import { styled } from "styled-components";
import FollowBtn from "../utils/FollowBtn";
import RoundImg from "../utils/RoundImg";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/img/userIcons/profileImage.jpg";

interface RecommendProps {
  recommendItem: { nickname: string; profileImageUrl: string; userId: number };
}

function UserRecommendListItem({ recommendItem }: RecommendProps) {
  const profileImg = recommendItem.profileImageUrl || profileImage;

  return (
    <UserItem>
      <Link to={`/profile/${recommendItem.userId}`} className="home">
        <RoundImg src={profileImg} size="50px" />
      </Link>
      <Nickname>{recommendItem.nickname}</Nickname>
      <BottomContent>
        <FollowBtn userId={recommendItem.userId} />
      </BottomContent>
    </UserItem>
  );
}

const UserItem = styled.div`
  border-radius: 10px;
  width: 120px;
  display: inline-block;
  padding: 10px;
  margin: 5px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  color: #4b4b4b;
`;

const Nickname = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const BottomContent = styled.div`
  bottom: 10px;
`;

export default UserRecommendListItem;
