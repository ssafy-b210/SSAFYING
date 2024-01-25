import UserBtn from "../../components/User/UserInfo/UserBtn";
import UserProfile from "../../components/User/UserInfo/UserProfile";
import UserInformation from "../../components/User/UserInfo/UserInformation";

function UserDetail() {
  return (
    <div>
      <UserProfile></UserProfile>
      <UserInformation></UserInformation>
      <UserBtn></UserBtn>
    </div>
  );
}

export default UserDetail;
