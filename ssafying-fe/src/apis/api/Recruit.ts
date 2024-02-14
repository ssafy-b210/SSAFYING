import { axios } from "../utils/axios";

export async function getRecruitList(code: string) {
  try {
    const response = await axios.get("/api/recruitment", {
      params: {
        code: code,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recruit list:", error);
    throw error;
  }
}
