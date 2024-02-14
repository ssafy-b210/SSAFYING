import { axios } from "../utils/axios";

const REST_CHAT_API = `/api/chat`;

// 채팅방 상세보기 조회
export async function selectChattingRoomDetail(roomId: number) {
  try {
    const res = await axios.get(`${REST_CHAT_API}/rooms/${roomId}`);
    return res.data.resultData;
  } catch (e: any) {
    console.log(e);
  }
}

// 참여 중인 채팅방 목록 조회
export async function selectChattingRoomList(userId: number) {
  try {
    const res = await axios(`${REST_CHAT_API}/${userId}`);
    return res.data.resultData;
  } catch (error) {
    console.log(error);
  }
}

// 채팅 목록 조회
export async function selecctChatList(roomId: number) {
  try {
    const res = await axios.get(`${REST_CHAT_API}/rooms/${roomId}/messages`);
    return res.data.resultData;
  } catch (error) {
    console.log(error);
  }
}
