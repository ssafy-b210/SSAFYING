import RecruitSortTab from "../../../components/All/Recruitment/RecruitSortTab";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import RecruitmentSaramin from "../../../components/All/Recruitment/RecruitmentSaramin";

function RecruitmentList() {
  return (
    <div>
      <BackBtnHeader
        backLink="/all"
        htext={<h2>취업공고</h2>}
        isCenter={true}
      />
      <RecruitSortTab></RecruitSortTab>
      <RecruitmentSaramin></RecruitmentSaramin>
    </div>
  );
}

export default RecruitmentList;
