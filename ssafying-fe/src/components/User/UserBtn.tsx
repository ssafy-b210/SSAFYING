import styled from "styled-components";

function UserBtn() {
  return (
    <div>
      <UserButtonContainer>
        <UserButton>회원정보 수정하기</UserButton>
        <UserButton className="outBtn">탈퇴하기</UserButton>
      </UserButtonContainer>
    </div>
  );
}

export default UserBtn;

const UserButton = styled.button`
  background-color: #8aae92;
  border-radius: 10px;
  border: none;
  color: white;
  margin-top: 80%;
  margin-right: 1em;
  margin-left: 1em;
  padding: 8px;
`;

const UserButtonContainer = styled.div`
  .outBtn {
    background-color: #fb3939;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
