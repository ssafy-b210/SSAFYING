import styled from "styled-components";

function MealPlan() {
  return (
    <MealPlanContainer>{/* 여기에  식단내용이 들어감 */}</MealPlanContainer>
  );
}

export default MealPlan;

const MealPlanContainer = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  margin: 10px;
`;
