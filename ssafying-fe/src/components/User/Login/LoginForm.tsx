import styled from "styled-components";

import profile from "../../../assets/img/userLoginIcons/profile.svg";
import lock from "../../../assets/img/userLoginIcons/lock.svg";

function LoginForm() {
  return (
    <LoginContainer>
      <Form>
        <div className="user-box">
          <div className="input-bar">
            <img src={profile} className="input-icon" />
            <Input type="email" placeholder="EMAIL"></Input>
          </div>
        </div>
        <div className="user-box">
          <div className="input-bar">
            <img src={lock} className="input-icon" />
            <Input type="password" placeholder="PW"></Input>
          </div>
        </div>
      </Form>
    </LoginContainer>
  );
}

export default LoginForm;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justifty-content: center;
  align-items: center;
  width: 100%;

  .user-box {
    width: 300px;
  }

  .input-bar {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }
  .input-icon {
    position: absolute;
    left: 10px;
    margin-bottom: 11px;
  }
`;

const Input = styled.input`
  width: calc(100% - 30px);
  height: 36px;
  border: none;
  border-radius: 10px;
  padding-left: 30px;
  margin-bottom: 15px;
`;
