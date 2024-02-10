import styled from "styled-components";
import logo2 from "../../../assets/img/logoImg/logo2.svg";

function LoginHeader() {
  return (
    <Header>
      <img src={logo2} alt="로그인로고" />
    </Header>
  );
}

export default LoginHeader;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  img {
    margin-bottom: 20px;
    height: 200px;
  }
`;
