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
    localStorage.setItem("refresh-token", response.data["refresh-token"]);
    document.cookie = `access-token=${response.data["access-token"]}`;
    console.log(response.data);
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
    const response = await axios.post(`${REST_AUTH_API}/logout/${loginId}`);
    console.log(response.data);
    removeCookie("access-token");
  } catch (e) {
    console.log(e);
  }
}
