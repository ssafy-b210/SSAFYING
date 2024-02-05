import { saramin } from "../../utils/saramin";
import { REACT_APP_SARAMIN_API_KEY } from "../../constants";

export async function getRecruitList(code: string) {
  try {
    console.log(REACT_APP_SARAMIN_API_KEY);
    const response = await saramin.get("/job-search", {
      params: {
        "access-key": REACT_APP_SARAMIN_API_KEY,
        job_cd: code,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching recruit list:", error);
    throw error;
  }
}
