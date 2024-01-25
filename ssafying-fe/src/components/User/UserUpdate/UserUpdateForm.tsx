import styled from "styled-components";

function UserUpdateForm() {
  return (
    <div>
      <Form>
        <SignUpInput className="input-area">
          <input type="text" id="nickname" placeholder=" " />
          <label htmlFor="nickname">닉네임을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="tel" id="tel" placeholder=" " />
          <label htmlFor="tel">전화번호를 입력해주세요</label>
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
          <input type="text" id="lineIntro" placeholder=" " />
          <label htmlFor="lineIntro">한줄 소개를 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="url" id="biolink" placeholder=" " />
          <label htmlFor="biolink">바이오 링크를 입력해주세요</label>
        </SignUpInput>
        <SubmitButton>회원정보 수정완료</SubmitButton>
      </Form>
    </div>
  );
}

export default UserUpdateForm;

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
  margin-top: 25px;
  margin-bottom: 15px;

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
    font-size: 100%;
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
const SubmitButton = styled.button`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #b6cdbd;
  border: none;
  color: white;
  margin-top: 45px;
`;
