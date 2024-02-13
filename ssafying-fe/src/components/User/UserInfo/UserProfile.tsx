import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import { selectOneUserInfo } from "../../../apis/api/User";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

function UserProfile() {
  const user = useAppSelector(selectUser);
  console.log(user);

  return (
    <Profile>
      <ProfileImage />
      <MyIntroduction>
        <h3>{user.username}</h3>
        <p>youremail@domain.com</p>
      </MyIntroduction>
    </Profile>
  );
}
export default UserProfile;

const Profile = styled.div`
  margin-top: 15px;
  position: relative;
`;

const MyIntroduction = styled.div`
  text-align: center;
  margin-top: 10px;
  h5 {
    margin-top: 0;
  }
`;
