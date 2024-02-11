import { error } from "console";
import { axios } from "../utils/axios";

const REST_AUTH_API = `/api/auth`;

// 회원가입
export async function signup(
  campusRegion: string,
  email: string,
  password: string,
  nickname: string,
  phoneNumber: string,
  name: string,
  generation: number,
  major: boolean
) {
  const data = {
    campusRegion: campusRegion,
    email: email,
    password: password,
    nickname: nickname,
    phoneNumber: phoneNumber,
    name: name,
    generation: generation,
    major: major,
  };
  try {
    const response = await axios.post(`${REST_AUTH_API}/signup`, data);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 로그인
export async function login(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };
  try {
    // const token = localStorage.getItem("accessToken");
    // console.log(token);
    const response = await axios.post(`${REST_AUTH_API}/login`, data);
    //로컬스토리지에서 토큰 가져오기
    localStorage.setItem(
      "refresh-token",
      response.data.resultData.responseHeaders.refreshToken
    );
    document.cookie = `access-token=${response.data.resultData.responseHeaders.accessToken}`;
    console.log(response.data);
    console.log(response.data.resultData.responseHeaders.accessToken);
    return response.data.resultData.response;
  } catch (e) {
    console.log(e);
  }
}

// 로그아웃
// 쿠키 삭제 함수
function removeCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export async function logout(loginId: number) {
  try {
    const refreshToken = localStorage.getItem("refresh-token");
    if (!refreshToken) {
      throw new Error("Refresh token not found!");
    }

    const response = await axios.post(
      `${REST_AUTH_API}/logout/${loginId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          refreshToken: refreshToken,
        },
      }
    );
    console.log(response.data);
    removeCookie("access-token");
  } catch (e) {
    console.log(e);
  }
}

//싸피 인증
interface AuthData {
  studentName: string;
  studentEmail: string;
  studentNumber: number;
}

interface AuthResponse {
  success: boolean;
}

export async function ssafyAuth(authData: AuthData): Promise<AuthResponse> {
  try {
    const response = await axios.post(`${REST_AUTH_API}/check`, authData);
    const resultMsg = response.data.resultMsg;
    if (resultMsg === "200 OK") {
      // 성공적으로 인증된 경우
      return { success: true };
    } else {
      // 인증 실패 또는 다른 에러가 발생한 경우
      console.error("인증 실패:", resultMsg);
      return { success: false };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
