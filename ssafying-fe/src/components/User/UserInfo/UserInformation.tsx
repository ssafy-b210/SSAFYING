import styled from "styled-components";

function UserInformation() {
  return (
    <div>
      <BigContainer>
        <UserInfoContainer>
          <div className="category">닉네임</div>
          <div className="content">aeong123</div>
          <div className="category">전화번호</div>
          <div className="content">010-0000-0000</div>
          <div className="category">비밀번호</div>
          <div className="content">*********</div>
          <div className="category">한줄 소개</div>
          <div className="content">나는 짱이야</div>
          <div className="category">바이오링크</div>
          <div className="content">aeong123@github.com</div>
        </UserInfoContainer>
      </BigContainer>
    </div>
  );
}

export default UserInformation;

const UserInfoContainer = styled.div`
  border: 1px solid gray;
  border-radius: 20px;
  height: 30em;
  width: 80%;
  padding: 20px;
  .category {
    color: gray;
    padding-top: 1em;
  }
  .content {
    padding-top: 0.5em;
    padding-left: 1em;
  }
`;

const BigContainer = styled.div`
  display: flex;
  justify-content: center;
`;
