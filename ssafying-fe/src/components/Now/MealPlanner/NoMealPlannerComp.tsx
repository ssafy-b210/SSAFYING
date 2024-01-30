import styled from "styled-components";

function NoMealPlannerComp() {
  return (
    <MsgContainer>
      <NoMealPlannerMsg>
        지금 등록된 식단표가 존재하지 않습니다.
      </NoMealPlannerMsg>
    </MsgContainer>
  );
}

export default NoMealPlannerComp;

const MsgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const NoMealPlannerMsg = styled.h4`
  text-align: center;
`;
