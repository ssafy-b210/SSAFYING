import styled from "styled-components";

import UserDefaultImg from "../../../assets/img/userIcons/userProfileImg.svg";
function UserProfile() {
  return (
    <Profile>
      <ProfileImg>
        <div className="img-container">
          <img src={UserDefaultImg} alt="user-profile-img"></img>
        </div>
      </ProfileImg>
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
const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  alilgn-items: center;
  .img-container {
    border: none;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: white;
    position: absolute;
  }
  img {
    position: relative;
    z-index: 1;
    left: 22px;
    top: 10px;
    object-fit: cover;
    width: 70%;
    height: 70%;
  }
`;
const MyIntroduction = styled.div`
  text-align: center;
  margin-top: 120px;
  h5 {
    margin-top: 0;
  }
`;
