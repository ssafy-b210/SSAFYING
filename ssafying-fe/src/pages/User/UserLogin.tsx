import ForgotpwBubble from "../../components/User/Login/ForgotpwBubble";
import LoginBtnBubble from "../../components/User/Login/LoginBtnBubble";
import LoginFormBubble from "../../components/User/Login/LoginFormBubble";
import LoginHeader from "../../components/User/Login/LoginHeader";
import SignupBubble from "../../components/User/Login/SignupBubble";

function UserLogin() {
  return (
    <div>
      <LoginHeader></LoginHeader>
      <LoginFormBubble></LoginFormBubble>
      <LoginBtnBubble></LoginBtnBubble>
      <ForgotpwBubble></ForgotpwBubble>
      <SignupBubble></SignupBubble>
    </div>
  );
}

export default UserLogin;
