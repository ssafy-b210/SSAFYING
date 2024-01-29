import styled from "styled-components";

import chatBubble3 from "../../../assets/img/userLoginIcons/SpeechBubble3.svg";

function ForgotpwBubble() {
  return (
    <ForgotpwContainer>
      <ForgotpwImgContainer>
        <ForgotpwImg src={chatBubble3} alt="Speech bubble icon" />
        <ForgotpwText>비밀번호를 잃어버리셨나요?</ForgotpwText>
      </ForgotpwImgContainer>
    </ForgotpwContainer>
  );
}

export default ForgotpwBubble;

const ForgotpwContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const ForgotpwImgContainer = styled.div`
  position: relative;
`;

const ForgotpwImg = styled.img`
  width: 100%;
`;

const ForgotpwText = styled.p`
  position: absolute;
  top: 24%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  text-align: center;
  white-space: nowrap;
`;
