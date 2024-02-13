import styled from "styled-components";
import ProfileImage from "./ProfileImage";
function UserProfile() {
  return (
    <Profile>
      <ProfileImage />
      <MyIntroduction>
        <h3>이예원</h3>
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
