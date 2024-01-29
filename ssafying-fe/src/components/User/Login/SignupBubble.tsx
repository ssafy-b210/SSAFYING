import styled from "styled-components";

import chatBubble4 from "../../../assets/img/userLoginIcons/SpeechBubble4.svg";

function SignupBubble() {
  return (
    <SignupContainer>
      <SignupImgContainer>
        <SignupImg src={chatBubble4} />
        <Signup>
          <p className="signup-text">
            등록된 계정이 없다면{" "}
            <span className="highlight">회원가입하러가기</span>
          </p>
        </Signup>
      </SignupImgContainer>
    </SignupContainer>
  );
}

export default SignupBubble;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const SignupImgContainer = styled.div`
  position: relative;
`;
const SignupImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
const Signup = styled.div`
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  .signup-text {
    white-space: nowrap;
    color: #666666;
  }
  .highlight {
    color: #75a67d;
  }
`;
