import UserBtn from "../../components/User/UserInfo/UserBtn";
import UserProfile from "../../components/User/UserInfo/UserProfile";
import UserInformation from "../../components/User/UserInfo/UserInformation";
import BackBtnHeader from "../../components/Common/BackBtnHeader";

function UserDetail() {
  return (
    <div>
      <BackBtnHeader
        backLink="/profile"
        isCenter={true}
        htext={<h2>회원정보</h2>}
      ></BackBtnHeader>
      <UserProfile></UserProfile>
      <UserInformation></UserInformation>
      <UserBtn></UserBtn>
    </div>
  );
}

export default UserDetail;
