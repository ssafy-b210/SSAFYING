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
  padding: 0 16px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #d8d8d8;
`;
