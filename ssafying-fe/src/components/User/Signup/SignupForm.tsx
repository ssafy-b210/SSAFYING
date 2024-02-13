import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../apis/api/Auth";

interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  //입력한 데이터담기
  const [inputValue, setInputValue] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    password2: "",
    tel: "",
    level: "",
    campus: "",
    major: -1,
  });

  // 입력값 바뀔때마다 저장하기
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  //비밀번호와 비밀번호 확인 같은지 체크하기
  const isSame = inputValue.password === inputValue.password2;

  //input에 모든 입력값이 다 입력되었는지 체크하기
  const isValid =
    inputValue.name !== "" &&
    inputValue.nickname !== "" &&
    inputValue.email !== "" &&
    inputValue.password !== "" &&
    inputValue.password2 !== "" &&
    inputValue.tel !== "" &&
    inputValue.level !== "" &&
    inputValue.campus !== "" &&
    inputValue.major !== -1 &&
    isSame;

  const navigate = useNavigate();

  const handleClickNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isValid) {
      window.alert("빈칸을 모두 채워주세요.");
      return;
    } else {
      try {
        await signup(
          inputValue.campus,
          inputValue.email,
          inputValue.password,
          inputValue.nickname,
          inputValue.tel,
          inputValue.name,
          parseInt(inputValue.level),
          inputValue.major
        );
        navigate("/auth");
        console.log(inputValue.major);
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  };

  const handleMajorChange = (isMajor: boolean) => {
    setInputValue({
      ...inputValue,
      major: isMajor ? 1 : 0,
    });
  };

  return (
    <div>
      <Form>
        <SignUpInput className="input-area">
          <input
            type="text"
            id="name"
            placeholder=" "
            name="name"
            value={inputValue.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="name">이름을 입력해주세요</label>
        </SignUpInput>
        {/*랜덤닉네임 부여 */}
        <SignUpInput className="input-area">
          <input
            type="text"
            id="nickname"
            placeholder=" "
            name="nickname"
            value={inputValue.nickname}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="nickname">닉네임을 입력해주세요</label>
        </SignUpInput>
        {/* <RandomNicknameGenerator /> */}
        {/* 이메일 중복검사 화면 만들기 */}
        <SignUpInput className="input-area">
          <input
            type="email"
            id="email"
            placeholder=" "
            name="email"
            value={inputValue.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">이메일을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input
            type="password"
            id="password"
            placeholder=" "
            name="password"
            value={inputValue.password}
            onChange={handleInputChange}
            minLength={8}
            maxLength={12}
            required
          />
          <label htmlFor="password">비밀번호을 입력해주세요 (8-12자)</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input
            type="password"
            id="password2"
            placeholder=" "
            name="password2"
            value={inputValue.password2}
            onChange={handleInputChange}
            minLength={8}
            maxLength={12}
            required
          />
          {inputValue.password2 !== "" && !isSame && (
            <p className="passwdCheck">비밀번호가 일치하지 않습니다.</p>
          )}
          <label htmlFor="password2">비밀번호를 다시 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input
            type="tel"
            id="tel"
            placeholder=" "
            name="tel"
            value={inputValue.tel}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="tel">전화번호를 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input
            type="number"
            id="level"
            placeholder=" "
            name="level"
            value={inputValue.level}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="level">기수를 입력해주세요</label>
        </SignUpInput>
        <Campus className="campus">
          <span>캠퍼스를 선택해주세요</span>
          <div className="radio-container">
            <input
              type="radio"
              name="campus"
              className="campusselect"
              onChange={handleInputChange}
              value="SEOUL"
            />
            서울
            <input
              type="radio"
              name="campus"
              className="campusselect"
              onChange={handleInputChange}
              value="DAEJEON"
            />
            대전
            <input
              type="radio"
              name="campus"
              className="campusselect"
              onChange={handleInputChange}
              value="GWANGJU"
            />
            광주
            <input
              type="radio"
              name="campus"
              className="campusselect"
              onChange={handleInputChange}
              value="GUMI"
            />
            구미
            <input
              type="radio"
              name="campus"
              className="campusselect"
              onChange={handleInputChange}
              value="BOOLKYUNG"
            />
            부울경
          </div>
        </Campus>
        <IsMajor className="isMajor">
          <span>전공 여부를 선택해주세요</span>
          <div className="radio-container">
            <input
              type="radio"
              name="major"
              className="major"
              onChange={() => handleMajorChange(true)}
              checked={inputValue.major === 1}
              value={1}
            />
            전공자
            <input
              type="radio"
              name="major"
              className="major"
              onChange={() => handleMajorChange(false)}
              checked={inputValue.major === 0}
              value={0}
            />
            비전공자
          </div>
        </IsMajor>
        <Link to={"/auth"}>
          <button
            onClick={handleClickNext}
            disabled={isValid ? false : true}
            className="nextButton"
          >
            다음으로
          </button>
        </Link>
      </Form>
    </div>
  );
};
export default SignUpForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  padding-right: 45px;
  padding-left: 45px;

  .nextButton {
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

  .campus {
    width: 100%;
    padding: 10px;
    font-size: 15px;
  }

  .isMajor {
    width: 100%;
    padding: 10px;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
`;
const SignUpInput = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 15px;

  .passwdCheck {
    font-size: 12px;
    color: red;
  }

  .input-area {
    width: 70%;
    position: relative;
    font-size: 18px;
    margin-top: 20px;
  }

  input {
    width: 60%;
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
    font-family: "Noto Sans KR", "Noto Sans";
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
const Campus = styled.div`
  .campusselect {
    margin-left: 15px;
  }
`;
const IsMajor = styled.div`
  .major {
    margin-left: 15px;
  }
`;
