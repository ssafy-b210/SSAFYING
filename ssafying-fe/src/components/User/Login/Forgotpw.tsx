import styled from "styled-components";

function Forgotpw() {
  return (
    <ForgotpwContainer>
      <ForgotpwText>비밀번호를 잃어버리셨나요?</ForgotpwText>
    </ForgotpwContainer>
  );
}

export default Forgotpw;

const ForgotpwContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const ForgotpwText = styled.p`
  text-align: center;
`;
