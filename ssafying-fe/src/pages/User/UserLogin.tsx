import logo from "../../assets/img/logo1.svg";
function UserLogin() {
  return (
    <div>
      <img src={logo} alt="ssafying"></img>
      <h4>우리는 여전히 싸피중</h4>
      <form>
        <input type="email" placeholder="이메일을 입력하세요"></input> <br />
        <input type="password" placeholder="비밀번호를 입력하세요"></input>
        <input type="checkbox"></input>
        <input type="submit" value="로그인하기"></input>
      </form>
    </div>
  );
}
export default UserLogin;
