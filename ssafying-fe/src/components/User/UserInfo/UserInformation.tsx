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
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  height: 500px;
  width: 80%;
  padding: 20px;
  .category {
    color: black;
    font-weight: bold;
    padding-top: 15px;
    font-family: "Noto Sans KR", "Noto Sans";
  }
  .content {
    padding-top: 10px;
    padding-left: 15px;
    font-family: "Noto Sans KR", "Noto Sans";
  }
`;

const BigContainer = styled.div`
  display: flex;
  justify-content: center;
`;
