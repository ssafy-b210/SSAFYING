import BackBtnHeader from "../../components/Common/BackBtnHeader";
import SelectTagForm from "../../components/User/Signup/SelectTagForm";
import ProgressBar from "../../components/User/Signup/ProgressBar";
import CenterHeader from "../../components/Common/CenterHeader";

function UserSelectTag() {
  return (
    <div>
      <CenterHeader />
      <BackBtnHeader
        backLink="/signup"
        htext={<h2>회원가입</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <ProgressBar width={66}></ProgressBar>
      <SelectTagForm></SelectTagForm>
    </div>
  );
}
export default UserSelectTag;
