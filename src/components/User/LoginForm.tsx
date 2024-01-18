import styled from "styled-components";

import googleIcon from "../../assets/SocialLoginIcons/googleIcon.png";
import githubIcon from "../../assets/SocialLoginIcons/githubIcon.png";
import kakaoIcon from "../../assets/SocialLoginIcons/kakaoIcon.png";

function UserLogin() {
  return (
    <div>
      <h1>ssafying</h1>
      <h4>우리는 여전히 싸피중</h4>
      <form>
        <input type="email" placeholder="이메일을 입력하세요"></input> <br />
        <input type="password" placeholder="비밀번호를 입력하세요"></input>
        <input type="checkbox"></input>
        <br />
        <input type="submit" value="로그인하기"></input>
        <SocialLoginBox>
          <SocialLogin>
            <img src={googleIcon} alt="Google Icon" />
          </SocialLogin>
          <SocialLogin>
            <img src={githubIcon} alt="Github Icon" />
          </SocialLogin>
          <SocialLogin>
            <img src={kakaoIcon} alt="Kakao Icon" />
          </SocialLogin>
        </SocialLoginBox>
      </form>
      <hr />
      <h4>등록된 계정이 없다면</h4>
      <button>회원가입</button>
    </div>
  );
}
export default UserLogin;

const SocialLoginBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SocialLogin = styled.div`
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
  }
`;
