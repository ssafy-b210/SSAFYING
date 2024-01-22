import UserProfile from "../../components/User/UserInfo/UserProfile";
import UserUpdateForm from "../../components/User/UserUpdate/UserUpdateForm";
import UserUpdateHeader from "../../components/User/UserUpdate/UserUpdateHeader";

function UserUpdate() {
  return (
    <div>
      <UserUpdateHeader></UserUpdateHeader>
      <UserProfile></UserProfile>
      <UserUpdateForm></UserUpdateForm>
    </div>
  );
}

export default UserUpdate;
