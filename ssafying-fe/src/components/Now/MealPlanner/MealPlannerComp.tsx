import styled from "styled-components";
import CustomDate from "./TodayDate";
import MealPlan, { MealPlanProps } from "./MealPlan";

function MealPlannerComp() {
  const handleVote = () => {
    console.log("Voted!");
  };
  return (
    <MsgContainer>
      <IsMealMsg>
        <CustomDate></CustomDate> 당신의 점심을 투표해주세요
      </IsMealMsg>
      <MealPlannerContainer>
        <MealPlan onVote={handleVote} />
        <MealPlan onVote={handleVote} />
      </MealPlannerContainer>
    </MsgContainer>
  );
}

export default MealPlannerComp;

const IsMealMsg = styled.h3``;
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
