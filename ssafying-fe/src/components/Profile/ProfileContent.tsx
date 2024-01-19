import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileIntroduction from "./ProfileIntroduction";

function ProfileContent() {
  return (
    <div>
      <ProfileUserContainer>
        <ProfileImage />
        <ProfileInfo />
      </ProfileUserContainer>
      <ProfileIntroduction />
      <button>회원정보</button>
      <button>로그아웃</button>
    </div>
  );
}

const ProfileUserContainer = styled.div`
  position: relative;
  display: flex;
  // justify-content: center;
  align-items: center;
`;

export default ProfileContent;
