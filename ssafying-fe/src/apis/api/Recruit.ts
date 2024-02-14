import { axios } from "../utils/axios";

export async function getRecruitList(code: string) {
  try {
    const response = await axios.get("/api/recruit", {
      params: {
        code: code,
      },
    });
    console.log(response.data.resultData);
    return response.data.resultData;
  } catch (error) {
    console.error("Error fetching recruit list:", error);
    throw error;
  }
}
