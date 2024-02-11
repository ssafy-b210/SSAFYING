import styled from "styled-components";
import BackBtnHeader from "../../Common/BackBtnHeader";

function ProfileHeader(props: { nickname: string }) {
  return (
    <StyledProfileHeader>
      <BackBtnHeader
        backLink="/feedhome"
        isCenter={true}
        text={props.nickname}
      />
    </StyledProfileHeader>
  );
}

export default ProfileHeader;

const StyledProfileHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #9a9a9a;
`;
