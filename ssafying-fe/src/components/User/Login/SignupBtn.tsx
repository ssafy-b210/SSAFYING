import styled from "styled-components";

import { Link } from "react-router-dom";

function SignupBtn() {
  return (
    <SignupContainer>
      <Signup>
        <p className="signup-text">👇등록된 계정이 없다면👇</p>
        <Link to="/signup">
          <ButtonContainer>
            <SubmitButton
              type="submit"
              value="회원가입 하러가기"
            ></SubmitButton>
          </ButtonContainer>
        </Link>
      </Signup>
    </SignupContainer>
  );
}

export default SignupBtn;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const Signup = styled.div`
  .signup-text {
    white-space: nowrap;
    color: black;
    text-align: center;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
  }
`;

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
