import { error } from "console";
import { axios } from "../utils/axios";

const REST_FOREST_API = `/api/bamboo`;

//대나무숲 목록 조회
export async function selectBambooList() {
  try {
    const response = await axios.get("/api/bamboo");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//대나무숲 작성
export async function createBamboo(userId: number, content: string) {
  try {
    const data = {
      userId: userId,
      content: content,
    };
    const response = await axios.post("/api/bamboo", data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//대나무숲 상세 조회
export async function selectOneBamboo(bambooId: number) {
  try {
    const response = await axios.get(`/api/bamboo/${bambooId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//대나무숲 댓글 작성
export async function createBambooComment(
  bambooId: number,
  userId: number,
  content: string
) {
  try {
    const data = {
      bambooId: bambooId,
      userId: userId,
      content: content,
    };
    const response = await axios.post(
      `${REST_FOREST_API}/comments/${bambooId}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//대나무숲 댓글 삭제
export async function deleteBambooComment(bambooCommentId: number) {
  try {
    const response = await axios.delete(
      `${REST_FOREST_API}/comments/${bambooCommentId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
