import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import { Link } from "react-router-dom";

function ProfileImageContainer() {
  const data = {
    profile: userImage,
    postNum: 54,
    followerNum: 834,
    followingNum: 162,
  };

  return (
    <StyledProfileImageContainer>
      <ProfileImage>
        <img src={data.profile} alt="" />
      </ProfileImage>
      <ProfileInfo>
        <ProfileInfoItem>
          <div>{data.postNum}</div>
          <div>게시물</div>
        </ProfileInfoItem>
        <ProfileInfoItem>
          <Link to="follower">
            <div>{data.followerNum}</div>
            <div>팔로워</div>
          </Link>
        </ProfileInfoItem>
        <ProfileInfoItem>
          <Link to="following">
            <div>{data.followingNum}</div>
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
  width: 100%;
  margin: 16px 0;
  box-sizing: border-box;
`;

const ProfileImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-grow: 1;

  img {
    width: 90px;
    height: 90px;
    padding: 5px;
    border: 1px solid #c7c7cc;
    border-radius: 50%;
    object-fit: cover;
    box-sizing: border-box;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
`;

const ProfileInfoItem = styled.div`
  padding: 16px;
  text-align: center;

  a {
    color: #000;
    text-decoration: none;
  }
`;
