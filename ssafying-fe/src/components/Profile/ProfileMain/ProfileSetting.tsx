import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../../apis/api/Auth";
import { useNavigate } from "react-router-dom";
import { selectOneUserInfo } from "../../../apis/api/User";

function ProflieSetting() {
  const navigate = useNavigate();
  const callLogout = () => {
    try {
      // logout(1)안에는 loginId로 나중에 바꾸기
      logout(1);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const callUserInfo = () => {
    try {
      // logout(1)안에는 loginId로 나중에 바꾸기
      selectOneUserInfo(1);
      navigate("/user/detail");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <StyledProfileSetting>
      <Link to="/user/detail">
        <Button>회원정보</Button>
      </Link>
      <Link to="/">
        <Button
          className="danger"
          onClick={() => {
            if (window.confirm("로그아웃하시겠습니까?")) {
              window.location.href = "/";
            }
          }}
        >
          로그아웃
        </Button>
      </Link>
    </StyledProfileSetting>
  );
}

export default ProflieSetting;

const StyledProfileSetting = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const Button = styled.button`
  margin: 0 16px;
  padding: 8px 30px;
  font-size: 14px;
  color: #000;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;

  &.danger {
    color: #fff;
    border: none;
    background-color: #ff4a4a;
  }
`;
