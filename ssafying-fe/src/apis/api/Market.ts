import { axios } from "../utils/axios";

const REST_MARKET_API = `/api/market`;

// 중고장터 글 작성
export async function createMarket() {
  try {
    const response = await axios.post(`${REST_MARKET_API}`);
    console.log(response.data);
  } catch (e: any) {
    console.error("Error:", e);
    console.error("Error-response:", e.response);
  }
}

// 중고장터 글 삭제

// 중고장터 글 수정

// 중고장터 목록 전체 조회

// 중고장터 글 상세 조회
