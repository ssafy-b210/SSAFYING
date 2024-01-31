import ImageRecognition from "../../../components/Now/MealPlanner/ImgToText";
import SelectCampus from "../../../components/Now/MealPlanner/SelectCampus";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";

function MealPlannerCreate() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        isCenter={true}
        htext={<h2>오늘 점심은 뭘까</h2>}
        extraBtn={<PlusBtn link="/meal/create" />}
      ></BackBtnHeader>
      <SelectCampus></SelectCampus>
      <ImageRecognition></ImageRecognition>
    </div>
  );
}

export default MealPlannerCreate;
