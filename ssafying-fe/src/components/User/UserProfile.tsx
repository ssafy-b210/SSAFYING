import styled from "styled-components";

import UserDefaultImg from "../../assets/img/userIcons/userProfileImg.svg";
function UserProfile() {
  return (
    <div>
      <Profile>
        <ProfileImg>
          <div className="img-container">
            <img src={UserDefaultImg} alt="user-profile-img"></img>
          </div>
        </ProfileImg>
        <MyIntroduction>
          <h3>aeong123</h3>
          <p>youremail@domain.com</p>
        </MyIntroduction>
      </Profile>
    </div>
  );
}
export default UserProfile;

const Background = styled.div`
  display: flex;
  justify-content: center;
  item-align: center;
  position: absolute;
  overflow: hidden;
  width: 560px;
`;

const Profile = styled.div`
  position: relative;
`;
const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  .img-container {
    border: none;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: #d9d9d9;
    position: absolute;
  }
  img {
    position: relative;
    z-index: 1;
    left: 16px;
    top: 4px;
    object-fit: cover;
  }
`;
const MyIntroduction = styled.div`
  text-align: center;
  margin-top: 120px;
  h5 {
    margin-top: 0;
  }
`;
