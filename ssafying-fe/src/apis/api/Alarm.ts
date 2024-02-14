import { axios } from "../utils/axios";

const REST_ALARM_API = `/api/notifications`;

// 8.1 알림을 위한 SSE 연결
// /notifications/subscribe/{userId}

export async function getSSELink(userId: number) {
  try {
    const response = await axios.get(`/api/notifications/subscribe/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// 8.2 알림 전체 조회
// /notifications/{userId}

export async function getAlarmList(userId: number) {
  try {
    const response = await axios.get(`/api/notifications/${userId}`);
    console.log(response.data.resultData);
    return response.data.resultData;
  } catch (e) {
    console.log(e);
  }
}
