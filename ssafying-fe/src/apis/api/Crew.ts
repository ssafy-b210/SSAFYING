import { axios } from "../utils/axios";
// import { URLSearchParams } from "url";

const REST_CREW_API = `/api/crew`;

// 구인 글 작성
export async function createCrew(
  userId: number,
  title: string,
  content: string,
  region: string,
  category: string,
  isRecruit: boolean
) {
  const data = {
    userId: userId,
    title: title,
    content: content,
    region: region,
    category: category,
    isRecruit: isRecruit,
  };

  try {
    const response = await axios.post("/api/crew", data);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 구인 글 삭제
export async function deleteCrew(crewId: number) {
  try {
    const response = await axios.delete(`${REST_CREW_API}/${crewId}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// 구인 글 상세 조회
export async function selectCrewOne(crewId: number) {
  try {
    const response = await axios.get(`${REST_CREW_API}/${crewId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 구인 글 전체 조회
export async function selectCrewList(
  title?: string,
  category?: string,
  region?: string
) {
  try {
    let url = "/api/crew";

    // URL에 추가될 쿼리스트링 파라미터들을 저장할 배열
    const queryParams = new URLSearchParams();
    if (title) {
      queryParams.append("title", title);
    }
    if (category) {
      queryParams.append("category", category);
    }
    if (region) {
      queryParams.append("region", region);
    }

    // 쿼리스트링 파라미터 배열을 URL에 추가
    const queryString = queryParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 구인 글 수정
interface UpdateCrewData {
  title?: string;
  content?: string;
  region?: string;
  category?: string;
  isRecruit?: boolean;
}

export async function updateCrew(crewId: number, updateData: UpdateCrewData) {
  try {
    const response = await axios.patch(
      `${REST_CREW_API}/${crewId}`,
      updateData
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 구인 글 검색

// 댓글 작성
export async function createCrewComment(
  crewId: number,
  userId: number,
  content: string,
  parentId: number //부모댓글의 아이디
) {
  const data = {
    crewId: crewId,
    userId: userId,
    content: content,
    parentId: parentId,
  };
  try {
    const response = await axios.post(
      `${REST_CREW_API}/comments/${crewId}`,
      data
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 댓글 삭제
export async function deleteCrewComment(crewCommentId: number) {
  try {
    const response = await axios.delete(
      `${REST_CREW_API}/comments/${crewCommentId}`
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}
