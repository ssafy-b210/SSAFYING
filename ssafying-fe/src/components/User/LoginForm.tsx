import styled from "styled-components";

import ssafying from "../../assets/ssafying.png";

import logo from "../../assets/img/logo1.svg";

import googleIcon from "../../assets/img/socialLoginIcons/googleIcon.png";
import githubIcon from "../../assets/img/socialLoginIcons/githubIcon.png";
import kakaoIcon from "../../assets/img/socialLoginIcons/kakaoIcon.png";
import profile from "../../assets/img/userLoginIcons/profile.svg";
import lock from "../../assets/img/userLoginIcons/lock.svg";

function LoginForm() {
  return (
    <div>
      <Header>
        <img src={ssafying} />
      </Header>
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
        <div className="etc-container">
          <div className="auto-login">
            <input type="checkbox"></input>
            <p>자동로그인</p>
          </div>
          <p>비밀번호를 잃어버리셨나요?</p>
        </div>
        <SubmitButton
          type="submit"
          value="로그인"
          className="login-btn"
        ></SubmitButton>
      </Form>
      <br />

      <SocialLoginBox>
        <SocialLogin>
          <img src={googleIcon} alt="Google Icon" />
        </SocialLogin>
        <SocialLogin>
          <img src={githubIcon} alt="Github Icon" />
        </SocialLogin>
        <SocialLogin>
          <img src={kakaoIcon} alt="Kakao Icon" />
        </SocialLogin>
      </SocialLoginBox>
      <Signup>
        <hr />
        <p>등록된 계정이 없다면</p>
        <div className="signup-btn">
          <SubmitButton type="submit" value="회원가입"></SubmitButton>
        </div>
      </Signup>
    </div>
  );
}
export default LoginForm;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 13vh;

  img {
    margin-bottom: 5px;
    height: 100px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .user-box {
    width: 300px;
  }

  .auto-login {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
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
  .etc-container {
    display: flex;
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

const SubmitButton = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #b6cdbd;
  border: none;
  color: white;
`;
const SocialLoginBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const SocialLogin = styled.div`
  height: 40px;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
    filter: drop-shadow(3px 3px 3px #000);
  }
`;

const Signup = styled.div`
  hr {
    width: 70%;
  }
  p,
  .signup-btn {
    display: flex;
    justify-content: center;
  }
`;
