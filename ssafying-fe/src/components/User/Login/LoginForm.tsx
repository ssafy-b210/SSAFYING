import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../../assets/img/userLoginIcons/profile.svg";
import lock from "../../../assets/img/userLoginIcons/lock.svg";
import { login } from "../../../apis/api/Auth";
import { useAppDispatch } from "../../../store/hooks";
import { saveUserInfo } from "../../../store/reducers/user";

import SubmitBtn from "../../Common/SubmitBtn";

function LoginForm() {
  const dispatch = useAppDispatch();

  const data = {
    statusCode: "OK",
    resultMsg: "200 OK",
    resultData: {
      response: {
        id: 1,
        campus: {
          campusId: 2,
          campusRegion: "DAEJEON",
        },
        email: "ssafy1@ssafy.com",
        password: "1234",
        nickname: "1234",
        phoneNumber: "010-1111-1111",
        name: "이싸피",
        generation: 10,
        profileImageUrl: null,
        intro: null,
        status: "ACTIVE",
        isMajor: false,
      },
      responseHeaders: {
        Authorization: ["aaaa"],
        refreshToken: ["aaaa"],
      },
    },
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const validation = {
    email: (email: string) => {
      if (email === "") {
        return "이메일을 제대로 입력해주세요";
      }
      return null;
    },
    password: (password: string) => {
      if (password === "") {
        return "비밀번호를 제대로 입력해주세요";
      }
      return null;
    },
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    const errorMessage =
      validation.email(form.email) ||
      validation.password(form.password) ||
      null;

    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError(null);
      try {
        const userData = await login(form.email, form.password);

        console.log("userData" + userData.email);

        dispatch(
          saveUserInfo({
            isAuthorized: true,
            userId: userData.id,
            username: userData.name,
            nickname: userData.nickname,
            campus: userData.campus.campusRegion,
            profileImgUrl: userData.profileImgUrl,
          })
        );
      } catch (error) {
        console.error("로그인 요청 실패:", error);
        setError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <LoginContainer>
      <Form>
        <div className="user-box">
          <fieldset className="input-bar">
            <img src={profile} className="input-icon" alt="profile icon" />
            <Input
              type="email"
              placeholder="EMAIL"
              required
              value={form.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </fieldset>
        </div>
        <div className="user-box">
          <fieldset className="input-bar">
            <img src={lock} className="input-icon" alt="lock icon" />
            <Input
              type="password"
              placeholder="PW"
              required
              value={form.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </fieldset>
        </div>
        <ButtonContainer>
          {error ? (
            <>
              <ErrorText>🚨{error}</ErrorText>
              <SubmitButton
                type="submit"
                value="로그인"
                onClick={handleSubmit}
              />
            </>
          ) : (
            <Link
              to={form.email !== "" && form.password !== "" ? "/feedhome" : "#"}
            >
              <SubmitButton
                type="submit"
                value="로그인"
                onClick={handleSubmit}
              />
            </Link>
          )}
        </ButtonContainer>
      </Form>
    </LoginContainer>
  );
}

export default LoginForm;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .user-box {
    width: 300px;
    display: flex;
    justify-content: center;
  }

  .input-bar {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }

  .input-icon {
    position: absolute;
    left: 20px;
    margin-bottom: 11px;
  }

  fieldset {
    border: none;
  }
`;

const Input = styled.input`
  width: calc(100% - 30px);
  height: 36px;
  border: none;
  border-radius: 10px;
  padding-left: 30px;
  margin-bottom: 15px;
`;

const ErrorText = styled.p`
  text-align: center;
  color: red;
  margin-top: 3px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SubmitButton = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #ff8e99;
  color: white;
  font-family: "Noto Sans KR";
`;
