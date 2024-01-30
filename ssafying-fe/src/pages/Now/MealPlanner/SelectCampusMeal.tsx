import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import MealPlannerComp from "../../../components/Now/MealPlanner/MealPlannerComp";
import NoMealPlannerComp from "../../../components/Now/MealPlanner/NoMealPlannerComp";
import SelectCampus from "../../../components/Now/MealPlanner/SelectCampus";
import MealPlannerView from "./MealPlannerView";

// 지금 등록된 식단표가 존재하는 경우와 존재하지 않는 경우 구분!
const hasMealPlanner = true;
function SelectCampusMeal() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        isCenter={true}
        htext={<h2>오늘 점심은 뭘까</h2>}
      ></BackBtnHeader>
      <SelectCampus></SelectCampus>
      {hasMealPlanner ? (
        <div>
          <MealPlannerView></MealPlannerView>
        </div>
      ) : (
        <div>
          <NoMealPlannerComp></NoMealPlannerComp>
        </div>
      )}
    </div>
  );
}

export default SelectCampusMeal;
