import { axios } from "../utils/axios";

//공고 조회
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

//공고 스크랩
export async function scrapRecruit(userId: number, recruitmentId: number) {
  try {
    const response = await axios.post("/api/recruit/scrap", {
      userId,
      recruitmentId,
    });
    console.log(response.data);
    // return response./data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//공고 스크랩 취소
export async function cancelscrapRecruit(
  userId: number,
  recruitmentId: number
) {
  try {
    const response = await axios.delete("/api/recruit/scrap", {
      data: {
        userId: userId,
        recruitmentId: recruitmentId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
