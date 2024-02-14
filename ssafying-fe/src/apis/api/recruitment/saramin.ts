import { saramin } from "../../utils/saramin";
import { REACT_APP_SARAMIN_API_KEY } from "../../constants";

// export async function getRecruitList(code: string) {
//   try {
//     const response = await saramin.get("/job-search", {
//       params: {
//         "access-key": REACT_APP_SARAMIN_API_KEY,
//         job_cd: code,
//         count: 100,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching recruit list:", error);
//     throw error;
//   }
// }
