import styled from "styled-components";

import authCheck from "../../assets/img/userIcons/userAuthCheck.svg";

function SsafyAuth() {
  return (
    <div>
      <Header>
        <h2>싸피인 인증절차를 진행하겠습니다.</h2>
      </Header>
      <Form>
        <Input className="input-area">
          <input type="text" id="name" placeholder=" " />
          <label htmlFor="name">이름을 입력해주세요</label>
        </Input>
        <Input className="input-area">
          <input type="email" id="email" placeholder=" " />
          <label htmlFor="email">이메일을 입력해주세요</label>
        </Input>
        <Input className="input-area">
          <input type="number" id="ssafyid" placeholder=" " />
          <label htmlFor="ssafyid">싸피 학번을 입력해주세요</label>
        </Input>
        <AuthMsg>
          <img src={authCheck} />
          <h3>성공적으로 인증이되었습니다.</h3>
        </AuthMsg>
        <SubmitButton>회원가입 하러가기</SubmitButton>
      </Form>
    </div>
  );
}
export default SsafyAuth;

const Header = styled.header`
  text-align: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: realtive;
  padding-right: 15px;
  padding-left: 15px;
`;

const Input = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 20px;

  .input-area {
    width: 70%;
    position: relative;
    font-size: 100%;
    margin-top: 20px;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 2px solid #ddd;
    outline: none;
    min-width: 60vmin;
    font-size: 18px;
    padding-bottom: 5px;
  }
  label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: transform 0.3s ease-out;
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-150%);
  }
`;
const AuthMsg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  img {
    margin: 15px;
  }
`;
const SubmitButton = styled.button`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  background-color: #616161;
  border: none;
  color: white;
  margin-top: 80%;
`;
