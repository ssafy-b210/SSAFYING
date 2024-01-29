import styled from "styled-components";

import chatBubble2 from "../../../assets/img/userLoginIcons/SpeechBubble2.svg";

import googleIcon from "../../../assets/img/socialLoginIcons/googleIcon.svg";
import githubIcon from "../../../assets/img/socialLoginIcons/githubIcon.svg";
import kakaoIcon from "../../../assets/img/socialLoginIcons/kakaoIcon.svg";

function LoginBtnBubble() {
  return (
    <LoginBtnContainer>
      <LoginBtnImgContainer>
        <LoginBtnImg src={chatBubble2} />
        <ButtonContainer>
          <SubmitButton
            type="submit"
            value="로그인"
            className="login-btn"
          ></SubmitButton>
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
        </ButtonContainer>
      </LoginBtnImgContainer>
    </LoginBtnContainer>
  );
}

export default LoginBtnBubble;

const LoginBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const LoginBtnImgContainer = styled.div`
  position: relative;
`;

const LoginBtnImg = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
`;
const SubmitButton = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #686868;
  border: none;
  color: white;
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
