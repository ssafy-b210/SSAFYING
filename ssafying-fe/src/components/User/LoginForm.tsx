import styled from "styled-components";

import logo from "../../assets/img/logo/logo1.svg";

import googleIcon from "../../assets/img/socialLoginIcons/googleIcon.png";
import githubIcon from "../../assets/img/socialLoginIcons/githubIcon.png";
import kakaoIcon from "../../assets/img/socialLoginIcons/kakaoIcon.png";

function LoginForm() {
  return (
    <div>
      <Header>
        <img src={logo} alt="ssafying" />
        <p>우리는 여전히 싸피다</p>
      </Header>
      <Form>
        <div className="user-box">
          <label>이메일을 입력하세요</label>
          <br />
          <Input type="email"></Input>
        </div>
        <div className="user-box">
          <label>비밀번호를 입력하세요</label>
          <br />
          <Input type="password"></Input>
        </div>
        <Input type="checkbox"></Input>
        <span></span>
        <Input type="submit" value="로그인"></Input>
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
        <button>회원가입</button>
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
  padding: 17vh;

  img {
    margin-bottom: 10px;
    height: 30px;
  }

  p {
    font-size: 15px;
    text-align: center;
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 15px;
  }
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
  p {
    display: flex;
    justify-content: center;
  }
  button {
    margin: 0 auto;
    display: block;
  }
`;
