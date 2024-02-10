import styled from "styled-components";

import LoginForm from "../../components/User/Login/LoginForm";
import LoginHeader from "../../components/User/Login/LoginHeader";
import SignupBtn from "../../components/User/Login/SignupBtn";

function UserLogin() {
  return (
    <Wrapper>
      <LoginHeader></LoginHeader>
      <LoginForm></LoginForm>
      <SignupBtn></SignupBtn>
    </Wrapper>
  );
}

export default UserLogin;
const Wrapper = styled.div`
  padding: 12px;
`;
