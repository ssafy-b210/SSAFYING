import { styled } from "styled-components";
import HashtagList from "../../components/Profile/HashtagList";
import MyFeedList from "../../components/Profile/MyFeedList";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileContent from "../../components/Profile/ProfileContent";

function ProfileMain() {
  return (
    <ProfileLayout>
      <ProfileHeader />
      <ProfileContent />
      <HashtagList />
      <MyFeedList />
    </ProfileLayout>
  );
}

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProfileMain;
