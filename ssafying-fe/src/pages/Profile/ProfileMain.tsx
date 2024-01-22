import { styled } from "styled-components";
import ProfileHeader from "../../components/Profile/ProfileMain/ProfileHeader";
import ProfileContent from "../../components/Profile/ProfileMain/ProfileContent";
import ScrapContent from "../../components/Profile/Scrap/ScrapContent";

function ProfileMain() {
  return (
    <ProfileLayout>
      <ProfileHeader />
      <ProfileContent />
      <ScrapContent />
    </ProfileLayout>
  );
}

const ProfileLayout = styled.div``;

export default ProfileMain;
