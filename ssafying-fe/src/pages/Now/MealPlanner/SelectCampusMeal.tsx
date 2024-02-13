import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import CenterHeader from "../../../components/Common/CenterHeader";
import Footer from "../../../components/Common/Footer";
import PlusBtn from "../../../components/Common/PlusBtn";
import MealPlannerComp from "../../../components/Now/MealPlanner/MealPlannerComp";
import NoMealPlannerComp from "../../../components/Now/MealPlanner/NoMealPlannerComp";
import SelectCampus from "../../../components/Now/MealPlanner/SelectCampus";
import MealPlannerView from "./MealPlannerView";
import styled from "styled-components";

// 지금 등록된 식단표가 존재하는 경우와 존재하지 않는 경우 구분!
const hasMealPlanner = true;
function SelectCampusMeal() {
  return (
    <MealWrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/now"
        isCenter={true}
        htext={<h3>오늘 점심은 뭘까</h3>}
        extraBtn={<PlusBtn link="/meal/create" />}
      ></BackBtnHeader>
      <SelectCampus></SelectCampus>
      {hasMealPlanner ? (
        <div>
          <MealPlannerView></MealPlannerView>
          <Footer></Footer>
        </div>
      ) : (
        <div>
          <NoMealPlannerComp></NoMealPlannerComp>
        </div>
      )}
    </MealWrapper>
  );
}

export default SelectCampusMeal;

const MealWrapper = styled.div`
  width: 100%;
  padding: 5px;
`;
