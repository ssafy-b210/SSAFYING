import styled from "styled-components";
import MyContentsContainer from "../../components/Profile/MyContents/MyContentsContainer";
import ProflieContainer from "../../components/Profile/ProfileMain/ProfileContainer";
import CenterHeader from "../../components/Common/CenterHeader";
import UserRecommendList from "../../components/Feed/UserRecommend/UserRecommendList";

function ProfileMain() {
  return (
    <Wrapper>
      <CenterHeader />
      <ProflieContainer />
      <UserRecommendList />
      <MyContentsContainer />
    </Wrapper>
  );
}

export default ProfileMain;

const Wrapper = styled.div`
  padding: 12px;
`;
