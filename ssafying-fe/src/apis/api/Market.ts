import { axios } from "../utils/axios";

const REST_MARKET_API = `/api/market`;

// 중고장터 글 작성
export async function createMarket(
  userId: number,
  marketWay: string, //sell, buy, share
  isSoldout: boolean, //판매중, 판매완료
  price: number,
  title: string,
  content: string,
  imageUrls?: string[]
) {
  try {
    const data = {
      userId: userId,
      marketWay: marketWay,
      isSoldout: isSoldout,
      price: price,
      title: title,
      content: content,
      imageUrls: imageUrls,
    };
    const response = await axios.post(`${REST_MARKET_API}`, data);
    console.log(response.data);
  } catch (e: any) {
    console.error("Error:", e);
    console.error("Error-response:", e.response);
  }
}

// 중고장터 글 삭제
export async function deleteMarket(marketId: number) {
  try {
    const response = await axios.delete(`${REST_MARKET_API}/${marketId}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// 중고장터 글 수정
export async function updateMarket(
  marketId?: number,
  marketWay?: string,
  isSoldout?: boolean,
  price?: number,
  title?: string,
  content?: string
) {
  const data = {
    marketId,
    marketWay,
    isSoldout,
    price,
    title,
    content,
  };
  try {
    const response = await axios.patch(`${REST_MARKET_API}/${marketId}`, data);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 중고장터 목록 전체 조회
export async function selectMarketList(marketWay?: string) {
  try {
    let url = "/api/market";
    if (marketWay !== undefined) {
      url += `?marketWay=${marketWay}`;
    }
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 중고장터 글 상세 조회
export async function selectMarketOne(marketId: number) {
  try {
    const response = await axios.get(`${REST_MARKET_API}/${marketId}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
