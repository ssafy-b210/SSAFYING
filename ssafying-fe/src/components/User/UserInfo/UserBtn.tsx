import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { leaveUser } from "../../../apis/api/User";

function UserBtn() {
  const navigate = useNavigate();
  const goToUpdate = () => {
    try {
      navigate("/user/update");
    } catch (e) {
      console.log(e);
    }
  };

  const goToLeave = () => {
    try {
      var password = prompt(
        "SSAFYING 탈퇴",
        "탈퇴하시려면 비밀번호를 다시 한번 입력해주세요."
      );
      // 패스워드는 로그인한 유저의 패스워드로 바뀰것!!!
      if (password === "1234") {
        // 1: userId, 1234: 유저 패스워드
        leaveUser(1, password);
        navigate("/user/leave");
      } else {
        alert("올바른 비밀번호를 입력해주세요");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <UserButtonContainer>
        <UserButton onClick={goToUpdate}>수정하기</UserButton>
        <UserButton className="outBtn" onClick={goToLeave}>
          탈퇴하기
        </UserButton>
      </UserButtonContainer>
    </div>
  );
}

export default UserBtn;

const UserButton = styled.button`
  background-color: #565cf8;
  border-radius: 10px;
  border: none;
  color: white;
  margin-right: 15px;
  margin-left: 15px;
  padding: 8px 12px;
  font-family: "Noto Sans KR", "Noto Sans";
`;

const UserButtonContainer = styled.div`
  .outBtn {
    background-color: #f93737;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
