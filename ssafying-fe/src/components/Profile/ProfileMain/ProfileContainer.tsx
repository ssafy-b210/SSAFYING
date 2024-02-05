import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import ProflieSection from "./ProfileSection";
import ProflieSetting from "./ProfileSetting";

function ProflieContainer() {
  return (
    <StyledProfileContainer>
      <ProfileHeader />
      <ProflieSection />
      <ProflieSetting />
    </StyledProfileContainer>
  );
}

export default ProflieContainer;

const StyledProfileContainer = styled.div`
  position: relative;
  padding: 0 16px 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;
