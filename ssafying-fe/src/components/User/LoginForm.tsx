import styled from "styled-components";

import logo from "../../assets/img/logo1.svg";

import googleIcon from "../../assets/SocialLoginIcons/googleIcon.png";
import githubIcon from "../../assets/SocialLoginIcons/githubIcon.png";
import kakaoIcon from "../../assets/SocialLoginIcons/kakaoIcon.png";

function LoginForm() {
  return (
    <div className="">
      <img src={logo} alt="ssafying"></img>
      <form>
        <input type="email" placeholder="이메일을 입력하세요"></input> <br />
        <input type="password" placeholder="비밀번호를 입력하세요"></input>
        <input type="checkbox"></input>
        <br />
        <input type="submit" value="로그인하기"></input>
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
      </form>
      <hr />
      <p>등록된 계정이 없다면</p>
      <button>회원가입</button>
    </div>
  );
}
export default LoginForm;

const SocialLoginBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SocialLogin = styled.div`
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
  }
`;
