import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubmitBtn from "../../Common/SubmitBtn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    major: "",
  });

  // 입력값 바뀔때마다 저장하기
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const {
    name,
    nickname,
    email,
    password,
    password2,
    tel,
    level,
    campus,
    major,
  } = inputValue;

  //비밀번호와 비밀번호 확인 같은지 체크하기
  const isSame = password === password2;

  //input에 모든 입력값이 다 입력되었는지 체크하기
  const isValid =
    name !== "" &&
    nickname !== "" &&
    email !== "" &&
    password !== "" &&
    password2 !== "" &&
    tel !== "" &&
    level !== "" &&
    campus !== "" &&
    major !== "" &&
    isSame;

  const navigate = useNavigate();

  const handleClickNext = () => {
    if (!isValid) {
      alert("빈칸을 모두 채워주세요.");
    } else {
      navigate("/tagselect");
    }
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
          <label htmlFor="email">이메일을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input
            type="password"
            id="password"
            placeholder=" "
            name="password"
            onChange={handleInputChange}
          />
          <label htmlFor="password">비밀번호을 입력해주세요 (8-12자)</label>
        </SignUpInput>

        <SignUpInput className="input-area">
          <input
            type="password"
            id="password2"
            placeholder=" "
            name="password2"
            onChange={handleInputChange}
          />
          {password2 !== "" && !isSame && (
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
            onChange={handleInputChange}
          />
          <label htmlFor="tel">전화번호를 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input
            type="number"
            id="level"
            placeholder=" "
            name="level"
            onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            전공자
            <input
              type="radio"
              name="major"
              className="major"
              onChange={handleInputChange}
            />
            비전공자
          </div>
        </IsMajor>

        <Link to={"/tagselect"}>
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
  // align-items: center;
  position: relative;
  padding-right: 45px;
  // padding-left: 45px;

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
