import UserBtn from "../../components/User/UserBtn";
import UserProfile from "../../components/User/UserProfile";
import UserInformation from "../../components/User/UserInformation";

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
