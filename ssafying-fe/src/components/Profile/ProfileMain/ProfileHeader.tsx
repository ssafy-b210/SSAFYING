import styled from "styled-components";
import hamburger from "../../../assets/img/hamburger.svg";

function ProfileHeader() {
  return (
    <StyledProfileHeader>
      <div>aeong123</div>
      <ProfileMenuBtn onClick={() => alert("Menu Opened")}>
        <img src={hamburger} alt="hamburger menu" />
      </ProfileMenuBtn>
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
`;

const ProfileMenuBtn = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
