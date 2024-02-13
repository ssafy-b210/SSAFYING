import UserProfile from "../../components/User/UserInfo/UserProfile";
import UserUpdateForm from "../../components/User/UserUpdate/UserUpdateForm";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import UserProfileUpdate from "../../components/User/UserUpdate/UserProfileUpdate";

function UserUpdate() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>회원정보 수정</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <UserProfileUpdate></UserProfileUpdate>
      <UserUpdateForm></UserUpdateForm>
    </div>
  );
}

export default UserUpdate;
