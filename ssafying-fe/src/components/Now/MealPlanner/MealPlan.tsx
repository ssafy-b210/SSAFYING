import styled from "styled-components";

function MealPlan() {
  return (
    <div>
      <MealPlanContainer>{/* 여기에  식단내용이 들어감 */}</MealPlanContainer>
      <IsLikeContainer>
        <IsLikeButton>투표하기</IsLikeButton>
      </IsLikeContainer>
    </div>
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

const IsLikeContainer = styled.div``;
const IsLikeButton = styled.button``;
