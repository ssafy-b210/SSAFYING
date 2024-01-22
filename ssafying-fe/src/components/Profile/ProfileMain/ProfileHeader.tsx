import styled from "styled-components";
import hamburger from "../../../assets/img/hamburger.svg";

function ProfileHeader() {
  return (
    <StyledProfileHeader>
      <div>aeong123</div>
      <button>
        <img src={hamburger} alt="hamburger menu" />
      </button>
    </StyledProfileHeader>
  );
}

const StyledProfileHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding: 0 16px;
  color: #262626;
  font-weight: bold;
  background-color: #fafafa;

  button {
    display: flex;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default ProfileHeader;
