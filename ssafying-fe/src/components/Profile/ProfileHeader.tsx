import styled from "styled-components";
import hamburger from "../../assets/img/hamburger.svg";

function ProfileHeader() {
  return (
    <StyledProfileHeader>
      <div>aeong123</div>
      <img src={hamburger} alt="hamburger menu" />
    </StyledProfileHeader>
  );
}

const StyledProfileHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 10px;

  img {
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export default ProfileHeader;
