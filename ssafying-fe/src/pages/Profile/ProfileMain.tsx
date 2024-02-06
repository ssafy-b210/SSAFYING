import styled from "styled-components";
import MyContentsContainer from "../../components/Profile/MyContents/MyContentsContainer";
import ProflieContainer from "../../components/Profile/ProfileMain/ProfileContainer";
import CenterHeader from "../../components/Common/CenterHeader";

function ProfileMain() {
  return (
    <Wrapper>
      <CenterHeader />
      <ProflieContainer />
      <MyContentsContainer />
    </Wrapper>
  );
}

export default ProfileMain;

const Wrapper = styled.div`
  padding: 12px;
`;
