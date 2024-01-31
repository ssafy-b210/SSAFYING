import Forgotpw from "../../components/User/Login/Forgotpw";
import LoginBtn from "../../components/User/Login/LoginBtn";
import LoginForm from "../../components/User/Login/LoginForm";
import LoginHeader from "../../components/User/Login/LoginHeader";
import SignupBtn from "../../components/User/Login/SignupBtn";

function UserLogin() {
  return (
    <div>
      <LoginHeader></LoginHeader>
      <LoginForm></LoginForm>
      <LoginBtn></LoginBtn>
      <Forgotpw></Forgotpw>
      <SignupBtn></SignupBtn>
    </div>
  );
}

export default UserLogin;
