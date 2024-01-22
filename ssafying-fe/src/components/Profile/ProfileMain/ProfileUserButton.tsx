import styled from "styled-components";

function ProfileUserButton() {
  return (
    <StyledProfileButton>
      <button>회원정보</button>
    </StyledProfileButton>
  );
}

const StyledProfileButton = styled.div`
  button {
    padding: 8px 36px;
    background-color: #fff;
    border: 1px solid #d8d8d8;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export default ProfileUserButton;
