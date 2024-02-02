import styled from "styled-components";
import SignUpForm from "../../components/User/Signup/SignupForm";
import BackBtnHeader from "../../components/Common/BackBtnHeader";

function UserSignup() {
  return (
    <Wrapper>
      <BackBtnHeader
        backLink="/"
        htext={<h2>회원가입</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <SignUpForm />
    </Wrapper>
  );
}
export default UserSignup;

const Wrapper = styled.div`
  padding: 12px;
`;
