import { axios } from "../utils/axios";

const REST_BOARD_API = `/api/boards`;

//게시판 게시글 작성
export async function createBoard(
  userId: number,
  title: string,
  content: string,
  category: string,
  isAnonymous: boolean
) {
  const data = {
    userId: userId,
    title: title,
    content: content,
    category: category,
    isAnonymous: isAnonymous,
  };

  try {
    const response = await axios.post("/api/boards", data);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//게시판 전체 조회

//게시판 게시글 스크랩
export async function scrapBoard(userId: number, boardId: number) {
  try {
    const data = { userId, boardId };
    const response = await axios.post(`${REST_BOARD_API}/scrap`, data);
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
}

//게시판 게시글 스크랩 취소
export async function cancelscarpBoard(userId: number, boardId: number) {
  try {
    const data = { userId, boardId };
    const response = await axios.delete(`${REST_BOARD_API}/scrap`, { data });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 게시판 게시글 상세 조회

// 게시판 게시글 삭제
export async function deleteBoard(boardId: number) {
  try {
    const response = await axios.delete(`${REST_BOARD_API}/${boardId}`);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//게시판 게시글 수정
export async function updateBoard() {
  try {
  } catch (e) {
    console.log(e);
  }
}

// 게시판 게시글 댓글 작성

// 게시판 게시글 댓글 삭제

// 게시판 게시글 댓글 수정
