import styled from "styled-components";
import React, { useState } from "react";
import SubmitBtn from "../Common/SubmitBtn";
import ProgressBar from "./Signup/ProgressBar";

import { ssafyAuth } from "../../apis/api/Auth";

function SsafyAuth() {
  const [authSuccess, setAuthSuccess] = useState(false); //인증 성공 여부 상태
  const [authError, setAuthError] = useState(false); //인증 실패 여부 상태
  const [showLoginBtn, setShowLoginBtn] = useState(false); //로그인 버튼 보이기 여부 상태

  const handleAuth = async () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const ssafyidInput = document.getElementById("ssafyid") as HTMLInputElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const ssafyid = ssafyidInput.value;

    const authData = {
      studentName: name,
      studentEmail: email,
      studentNumber: parseInt(ssafyid),
    };

    try {
      const response = await ssafyAuth(authData);
      if (response.success) {
        setAuthSuccess(true);
        setShowLoginBtn(true);
        setAuthError(false);
      } else {
        setAuthError(true);
        setAuthSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setAuthError(true);
    }
  };

  // 실패했을때 재시도 버튼을 누를 경우
  const retryAuth = () => {
    setAuthError(false);
  };

  return (
    <div>
      <Header>
        <h2>싸피인 인증절차를 진행하겠습니다.</h2>
      </Header>
      <ProgressBar width={99}></ProgressBar>
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
        <button type="button" onClick={handleAuth} className="button">
          인증하기
        </button>
        {authSuccess && (
          <AuthMsg>
            <p>✅성공적으로 인증이 되었습니다. 로그인을 진행해주세요. 👇</p>
          </AuthMsg>
        )}
        {authError && (
          <AuthMsg>
            <p>❌싸피인 인증에 실패하였습니다. 다시 입력해주세요.❌</p>
            {/* <button onClick={retryAuth}>재시도</button> */}
          </AuthMsg>
        )}
        {showLoginBtn && <SubmitBtn link="/" text="로그인하러 가기" />}
      </Form>
    </div>
  );
}
export default SsafyAuth;

const Header = styled.header`
  text-align: center;
  margin-top: 50px;
  h2 {
    font-family: "Noto Sans KR", "Noto Sans", sans-serif;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: realtive;
  padding-right: 15px;
  padding-left: 15px;

  .button {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    margin-bottom: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    color: black;
    font-family: "Noto Sans KR";
    font-size: 16px;
    margin-top: 30px;
  }
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
    border-radius: 20px;
    outline: none;
    min-width: 60vmin;
    font-size: 14px;
    font-family: "Noto Sans KR";
    padding-left: 10px;
    padding-top: 10px;
    background-color: rgba(255, 255, 255, 0.3);
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
const AuthMsg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  img {
    margin: 15px;
  }
`;
