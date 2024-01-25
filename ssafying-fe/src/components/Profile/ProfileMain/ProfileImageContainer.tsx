import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import { Link } from "react-router-dom";

function ProfileImageContainer() {
  return (
    <StyledProfileImageContainer>
      <ProfileImage>
        <img src={userImage} alt="" />
      </ProfileImage>
      <ProfileInfo>
        <ProfileInfoItem>
          <div>54</div>
          <div>게시물</div>
        </ProfileInfoItem>
        <ProfileInfoItem>
          <Link
            to="profile/follower"
            onClick={() => alert("팔로워 리스트로 이동")}
          >
            <div>834</div>
            <div>팔로워</div>
          </Link>
        </ProfileInfoItem>
        <ProfileInfoItem>
          <Link
            to="profile/following"
            onClick={() => alert("팔로잉 리스트로 이동")}
          >
            <div>162</div>
            <div>팔로잉</div>
          </Link>
        </ProfileInfoItem>
      </ProfileInfo>
    </StyledProfileImageContainer>
  );
}

export default ProfileImageContainer;

const StyledProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  margin: 16px 0;
`;

const ProfileImage = styled.div`
  position: relative;
  max-width: 180px;

  img {
    width: 90px;
    height: 90px;
    padding: 5px;
    border: 1px solid #c7c7cc;
    border-radius: 50%;
    object-fit: cover;
    box-sizing: border-box;
  }

  @media screen and (min-width: 500px) {
    img {
      margin-left: 45px;
    }
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProfileInfoItem = styled.div`
  padding: 16px;
  text-align: center;

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
