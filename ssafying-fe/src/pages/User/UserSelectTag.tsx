import BackBtnHeader from "../../components/Common/BackBtnHeader";
import SelectTagForm from "../../components/User/Signup/SelectTagForm";
function UserSelectTag() {
  return (
    <div>
      <BackBtnHeader
        backLink="/signup"
        htext={<h2>회원가입</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <SelectTagForm></SelectTagForm>
    </div>
  );
}
export default UserSelectTag;
