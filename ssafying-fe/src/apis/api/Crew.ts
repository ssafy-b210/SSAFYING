import { axios } from "../utils/axios";

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
  } catch (e) {
    console.log(e);
  }
}

// 구인 글 상세 조회
export async function selectCrewOne(crewId: number) {
  try {
    const response = await axios.get(`${REST_CREW_API}/${crewId}`);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 구인 글 전체 조회
export async function selectCrewList() {
  try {
    const response = await axios.get(`${REST_CREW_API}`);
    console.log(response.data);
  } catch (e) {
    console.log(e);
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
export async function deleteCrewComment() {}
