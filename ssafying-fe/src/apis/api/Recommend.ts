import { axios } from "../utils/axios";

export async function getRecommendList(userId: number) {
  try {
    const response = await axios.get(`api/users/recommend/${userId}`);
    console.log(response.data.resultData);
    return response.data.resultData;
  } catch (e) {
    console.log(e);
  }
}
