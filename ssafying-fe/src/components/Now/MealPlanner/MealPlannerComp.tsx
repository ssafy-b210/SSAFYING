import styled from "styled-components";
import CustomDate from "./TodayDate";

function MealPlannerComp() {
  return (
    <MsgContainer>
      <IsMealMsg>
        <CustomDate></CustomDate>의 점심을 투표해주세요
      </IsMealMsg>
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
