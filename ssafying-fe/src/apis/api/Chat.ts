import { axios } from "../utils/axios";

const REST_CHAT_API = `/api/chat`;

// 참여 중인 채팅방 목록 조회
export async function selectChattingRoomList(userId: number) {
  try {
    const res = await axios(`${REST_CHAT_API}/${userId}`);
    return res.data.resultData;
  } catch (error) {
    console.log(error);
  }
}
