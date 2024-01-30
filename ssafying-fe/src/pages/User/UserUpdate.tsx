import UserProfile from "../../components/User/UserInfo/UserProfile";
import UserUpdateForm from "../../components/User/UserUpdate/UserUpdateForm";
import BackBtnHeader from "../../components/Common/BackBtnHeader";

function UserUpdate() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>회원정보 수정</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <UserProfile></UserProfile>
      <UserUpdateForm></UserUpdateForm>
    </div>
  );
}

export default UserUpdate;
