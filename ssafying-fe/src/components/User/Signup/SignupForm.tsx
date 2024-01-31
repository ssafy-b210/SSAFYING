import styled from "styled-components";

function SignUpForm() {
  return (
    <div>
      <Form>
        <SignUpInput className="input-area">
          <input type="text" id="name" placeholder=" " />
          <label htmlFor="name">이름을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="text" id="nickname" placeholder=" " />
          <label htmlFor="nickname">닉네임을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="email" id="email" placeholder=" " />
          <label htmlFor="email">이메일을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="password" id="password" placeholder=" " />
          <label htmlFor="password">비밀번호을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="password" id="password2" placeholder=" " />
          <label htmlFor="password2">비밀번호를 다시 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="tel" id="tel" placeholder=" " />
          <label htmlFor="tel">전화번호를 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="date" id="birthday" placeholder=" " />
          <label htmlFor="birthday">생년월일을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="text" id="campus" placeholder=" " />
          <label htmlFor="campus">캠퍼스</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="number" id="level" placeholder=" " />
          <label htmlFor="level">기수</label>
        </SignUpInput>
        <div className="isMajor">
          <input type="radio" name="isMajor" />
          전공자
          <input type="radio" name="isMajor" />
          비전공자
        </div>
        <SubmitButton>회원가입 하러가기</SubmitButton>
      </Form>
    </div>
  );
}
export default SignUpForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-right: 45px;
  padding-left: 45px;

  .isMajor {
    margin-top: 45px;
    margin-bottom: 75px;
  }
`;
const SignUpInput = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 15px;

  .input-area {
    width: 70%;
    position: relative;
    font-size: 18px;
    margin-top: 20px;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 20px;
    outline: none;
    min-width: 60vmin;
    font-size: 15px;
    padding-bottom: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    padding-left: 10px;
    padding-top: 10px;
  }
  label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: transform 0.3s ease-out;
    padding-left: 10px;
    font-size: 15px;
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-150%);
    font-size: 12px;
  }
`;
const SubmitButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: black;
  font-family: "Noto Sans KR";
  font-size: 16px;
`;
const isMajor = styled.div``;
