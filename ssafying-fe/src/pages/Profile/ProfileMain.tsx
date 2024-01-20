import { styled } from "styled-components";
import HashtagList from "../../components/Profile/HashtagList";
import MyFeedList from "../../components/Profile/MyFeedList";

function ProfileMain() {
  return (
    <ProfileLayout>
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
