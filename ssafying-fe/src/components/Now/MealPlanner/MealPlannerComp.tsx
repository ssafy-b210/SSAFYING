import styled from "styled-components";

import MealPlan, { MealPlanProps } from "./MealPlan";

interface MealPlannerCompProps {
  onVote: () => void;
}

const MealPlannerComp: React.FC<MealPlannerCompProps> = ({ onVote }) => {
  const handleVote = () => {
    onVote();
  };

  return (
    <MealPlannerContainer>
      <MealPlan onVote={handleVote} voteCount={0} />
    </MealPlannerContainer>
  );
};

export default MealPlannerComp;

const MsgContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MealPlannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
