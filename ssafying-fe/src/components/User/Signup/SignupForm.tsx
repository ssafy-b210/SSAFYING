import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubmitBtn from "../../Common/SubmitBtn";
// import { style } from "@mui/system";

interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    password2: "",
    tel: "",
    level: "",
    campus: "",
    strongPasswordError: "",
    mismatchError: "",
  });

  const submitRequirements =
    inputValue.name &&
    inputValue.nickname &&
    inputValue.email &&
    inputValue.password &&
    inputValue.password2 &&
    inputValue.tel &&
    inputValue.level &&
    inputValue.campus &&
    inputValue.strongPasswordError &&
    inputValue.mismatchError;

  const inputRegexs = {
    // 비밀번호 : 최소 8자 이상, 최소한 하나의 대문자, 하나의 소문자, 하나의 숫자, 하나의 특수문자를 포함, 공백 허용하지 않음
    pwRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
  };

  return (
    <div>
      <Form>
        <SignUpInput className="input-area">
          <input type="text" id="name" placeholder=" " />
          <label htmlFor="name">이름을 입력해주세요</label>
        </SignUpInput>
        {/*랜덤닉네임 부여 */}
        <SignUpInput className="input-area">
          <input type="text" id="nickname" placeholder=" " />
          <label htmlFor="nickname">닉네임을 입력해주세요</label>
        </SignUpInput>
        {/* 이메일 중복검사 화면 만들기 */}
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
          <input type="number" id="level" placeholder=" " />
          <label htmlFor="level">기수를 입력해주세요</label>
        </SignUpInput>
        <Campus>
          <span>캠퍼스를 선택해주세요</span>
          <div className="radio-container">
            <input type="radio" name="campus" className="campusselect" />
            서울
            <input type="radio" name="campus" className="campusselect" />
            대전
            <input type="radio" name="campus" className="campusselect" />
            구미
            <input type="radio" name="campus" className="campusselect" />
            광주
            <input type="radio" name="campus" className="campusselect" />
            부울경
          </div>
        </Campus>
        <IsMajor>
          <span>전공 여부를 선택해주세요</span>
          <div className="radio-container">
            <input type="radio" name="isMajor" className="isMajor" />
            전공자
            <input type="radio" name="isMajor" className="isMajor" />
            비전공자
          </div>
        </IsMajor>
        <SubmitBtn
          link="/tagselect"
          text="다음으로 넘어가기"
          // className={submitRequirements ? styled.allFilled : styled.submitBtn}
          disabled={!submitRequirements}
        ></SubmitBtn>
      </Form>
    </div>
  );
};
export default SignUpForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-right: 45px;
  padding-left: 45px;
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
    border-bottom: 2px solid gray;
    border-radius: 0;
    outline: none;
    min-width: 60vmin;
    font-size: 15px;
    padding-bottom: 5px;
    background-color: transparent;
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
  input[type="date"]::-webkit-datetime-edit-text {
    -webkit-appearance: none;
    display: none;
  }
`;
const Campus = styled.div``;
const IsMajor = styled.div`
  text-align: left;
  span {
    margin-bottom: 20px;
  }
  .isMajor {
    margin: 20px 10px 75px 10px;
  }
  .radio-container {
  }
`;
