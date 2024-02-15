import { error } from "console";
import { axios } from "../utils/axios";

const REST_USER_API = `/api/users`;

// 회원 정보 조회
export async function selectOneUserInfo(userId: number) {
  try {
    const response = await axios.get(`${REST_USER_API}/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// 회원 정보 수정
export async function updateUserInfo(
  userId: number,
  nickname?: string,
  phoneNumber?: string,
  password?: string,
  intro?: string,
  profileImageUrl?: string,
  bioLink?: string
) {
  const data = {
    nickname,
    phoneNumber,
    password,
    intro,
    profileImageUrl,
    bioLink,
  };
  try {
    const response = await axios.patch(`${REST_USER_API}/${userId}`, data);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// 회원 탈퇴
export async function leaveUser(userId: number, password: string) {
  //   const data = { userd: userId, password: password };
  try {
    const response = await axios.delete(`${REST_USER_API}/${userId}`, {
      data: {
        userId: userId,
        password: password,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

//회원 관심사 선택
export async function selectTag(userId: number, hashtags: string[]) {
  try {
    const response = await axios.post(`${REST_USER_API}/tag`, {
      userId: userId,
      hashtags: hashtags,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
