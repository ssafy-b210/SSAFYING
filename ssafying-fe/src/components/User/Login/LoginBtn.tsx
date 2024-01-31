import styled from "styled-components";

import googleIcon from "../../../assets/img/socialLoginIcons/googleIcon.svg";
import githubIcon from "../../../assets/img/socialLoginIcons/githubIcon.svg";
import kakaoIcon from "../../../assets/img/socialLoginIcons/kakaoIcon.svg";

function LoginBtn() {
  return (
    <LoginBtnContainer>
      <ButtonContainer>
        <SubmitButton type="submit" value="로그인"></SubmitButton>
      </ButtonContainer>
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
    </LoginBtnContainer>
  );
}

export default LoginBtn;

const LoginBtnContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #565cf8;
  color: white;
  font-family: "Noto Sans KR";
`;

const SocialLoginBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLogin = styled.div`
  height: 40px;
  margin: 10px;
  border: none;
  border-radius: 50%;
  filter: drop-shadow(3px 3px 3px #d9d9d9);
  display: flex;
  justify-content: center;
  background-color: white;
  img {
    width: 80%;
    height: 100%;
  }
`;
