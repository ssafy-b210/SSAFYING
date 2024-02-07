import { axios } from "../utils/axios";

const REST_USERS_API = `/api/users`;

// 팔로잉 리스트 조회
export async function selectFollowingList(userId: number) {
  try {
    return await axios.get(`${REST_USERS_API}/following/${userId}`);
  } catch (e: any) {
    console.log(e);
  }
}

// 팔로워 리스트 조회
export async function selectFollowerList(userId: number) {
  try {
    return await axios.get(`${REST_USERS_API}/followers/${userId}`);
  } catch (e: any) {
    console.log(e);
  }
}

// 팔로잉 리스트 검색 결과 조회
export async function searchFollowingList(userId: number, nickname: string) {
  try {
    const response = await axios.get(`${REST_USERS_API}/following`, {
      data: {
        userId,
        nickname,
      },
    });
    console.log(response);
  } catch (e: any) {
    console.log(e);
  }
}

// 팔로워 리스트 검색 결과 조회
export async function searchFollowerList(userId: number, nickname: string) {
  try {
    const response = await axios.get(`${REST_USERS_API}/follower`, {
      data: {
        userId: userId,
        nickname: nickname,
      },
    });
    console.log(response);
  } catch (e: any) {
    console.log(e);
  }
}

// 팔로우하기
export async function followUser(userId: number) {
  try {
    const response = await axios.post(`${REST_USERS_API}/following`, {
      data: {
        userId,
      },
    });
    console.log(response);
  } catch (e: any) {
    console.log(e);
  }
}

// 언팔로우하기
export async function unfollowUser(userId: number) {
  try {
    const response = await axios.delete(
      `${REST_USERS_API}/following/${userId}`,
      {
        headers: {
          refreshToken: "",
        },
      }
    );
    console.log(response);
  } catch (e: any) {
    console.log(e);
  }
}
