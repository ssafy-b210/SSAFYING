import SignUpForm from "../../components/User/Signup/SignupForm";
import BackBtnHeader from "../../components/Common/BackBtnHeader";

function UserSignup() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>회원가입</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <SignUpForm />
    </div>
  );
}
export default UserSignup;
