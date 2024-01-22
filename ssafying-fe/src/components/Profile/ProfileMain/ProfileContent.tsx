import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileIntroduction from "./ProfileIntroduction";
import ProfileUserButton from "./ProfileUserButton";
import ProfileCancelButton from "./ProfileCancelButton";
import ScrapTap from "../Scrap/ScrapTap";

function ProfileContent() {
  return (
    <StyledProfileContent>
      <ProfileUserContainer>
        <ProfileImage />
        <ProfileInfo />
      </ProfileUserContainer>
      <ProfileIntroduction />
      <ProfileButtonContainer>
        <ProfileUserButton />
        <ProfileCancelButton />
      </ProfileButtonContainer>
      <ScrapTap />
    </StyledProfileContent>
  );
}

const StyledProfileContent = styled.div`
  position: relative;
  padding: 0 16px;
  color: #262626;
  background-color: #fafafa;
  border-bottom: 1px solid #d8d8d8;
`;

const ProfileUserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

const ProfileButtonContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 16px 0;

  button {
    margin: 0 16px;
  }
`;

export default ProfileContent;
