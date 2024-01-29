import BoardHeaderWithoutPlus from "../../components/All/Board/BoardMenu/BoardHeaderWithoutPlus";
import UserProfile from "../../components/User/UserInfo/UserProfile";
import UserUpdateForm from "../../components/User/UserUpdate/UserUpdateForm";
import UserUpdateHeader from "../../components/User/UserUpdate/UserUpdateHeader";

function UserUpdate() {
  return (
    <div>
      <BoardHeaderWithoutPlus header="회원정보 수정"></BoardHeaderWithoutPlus>
      <UserProfile></UserProfile>
      <UserUpdateForm></UserUpdateForm>
    </div>
  );
}

export default UserUpdate;
