import styled from "styled-components";

import chatBubble1 from "../../../assets/img/userLoginIcons/SpeechBubble1.svg";

import profile from "../../../assets/img/userLoginIcons/profile.svg";
import lock from "../../../assets/img/userLoginIcons/lock.svg";

function LoginFormBubble() {
  return (
    <LoginContainer>
      <LoginImgContainer>
        <LoginImg src={chatBubble1} />
        <Form>
          <div className="user-box">
            <label>이메일을 입력하세요</label>
            <br />
            <div className="input-bar">
              <img src={profile} className="input-icon" />
              <Input type="email" placeholder="Uname@mail.com"></Input>
            </div>
          </div>
          <div className="user-box">
            <label>비밀번호를 입력하세요</label>
            <br />
            <div className="input-bar">
              <img src={lock} className="input-icon" />
              <Input type="password" placeholder="Password"></Input>
            </div>
          </div>
          <div className="auto-login">
            <input type="checkbox" />
            <p>자동로그인</p>
          </div>
        </Form>
      </LoginImgContainer>
    </LoginContainer>
  );
}

export default LoginFormBubble;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const LoginImgContainer = styled.div`
  position: relative;
`;

const LoginImg = styled.img`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  label {
    color: #666666;
    font-size: small;
  }

  .user-box {
    width: 300px;
  }

  .auto-login {
    display: flex;
    flex-direction: row;
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
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  padding-left: 30px;
  margin-bottom: 15px;
`;
