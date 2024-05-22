import SelectCampus from "../../../components/Now/MealPlanner/SelectCampus";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";

function MealPlannerCreate() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        isCenter={true}
        htext={<h2>오늘 점심은 뭘까</h2>}
        // extraBtn={<PlusBtn link="/meal/create" />}
      ></BackBtnHeader>
      <SelectCampus></SelectCampus>
      {/* <ImageRecognition
        setMealPlanResult={}
        imageUrl={"https://i.ibb.co/zZ975XV/240129.png"}
      ></ImageRecognition> */}
    </div>
  );
}

export default MealPlannerCreate;
