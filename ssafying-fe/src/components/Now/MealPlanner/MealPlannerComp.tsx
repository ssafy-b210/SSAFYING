import styled from "styled-components";
import CustomDate from "./TodayDate";
import MealPlan from "./MealPlan";

function MealPlannerComp() {
  return (
    <MsgContainer>
      <IsMealMsg>
        <CustomDate></CustomDate>의 점심을 투표해주세요
      </IsMealMsg>
      <MealPlannerContainer>
        <MealPlan></MealPlan>
        <MealPlan></MealPlan>
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
