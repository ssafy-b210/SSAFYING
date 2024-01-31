import styled from "styled-components";
import React, { useState } from "react";

interface MealPlanProps {
  onVote: () => void;
}
const MealPlan: React.FC<MealPlanProps> = ({ onVote }) => {
  const [voteCount, setVoteCount] = useState<number>(0);

  const handleVoteClick = () => {
    setVoteCount((prevCount) => prevCount + 1);
    onVote();
  };
  return (
    <div>
      <MealPlanContainer>{/* 여기에  식단내용이 들어감 */}</MealPlanContainer>
      <IsLikeContainer>
        <IsLikeButton onClick={handleVoteClick}>투표하기</IsLikeButton>
        <VoteCountText>{voteCount} 투표</VoteCountText>
      </IsLikeContainer>
    </div>
  );
};

export default MealPlan;
export type { MealPlanProps };

const MealPlanContainer = styled.div`
  width: 200px;
  height: 300px;
  border: none;
  border-radius: 20px;
  background-color: white;
  margin: 10px;
`;

const IsLikeContainer = styled.div``;
const IsLikeButton = styled.button``;
const VoteCountText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: gray;
`;
