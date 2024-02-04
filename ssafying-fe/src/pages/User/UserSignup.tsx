import styled from "styled-components";
import SignUpForm from "../../components/User/Signup/SignupForm";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import ProgressBar from "../../components/User/Signup/ProgressBar";

function UserSignup() {
  return (
    <Wrapper>
      <BackBtnHeader
        backLink="/"
        htext={<h2>회원가입</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <ProgressBar width={33}></ProgressBar>
      <SignUpForm />
    </Wrapper>
  );
}
export default UserSignup;

const Wrapper = styled.div`
  padding: 12px;
`;
