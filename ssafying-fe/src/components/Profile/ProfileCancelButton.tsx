import styled from "styled-components";

function ProfileCancelButton() {
  return (
    <StyledProfileButton>
      <button>로그아웃</button>
    </StyledProfileButton>
  );
}

const StyledProfileButton = styled.div`
  button {
    padding: 8px 36px;
    color: #fff;
    background-color: #ff4a4a;
    border: 1px solid #3c3c4318;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export default ProfileCancelButton;
