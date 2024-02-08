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
  } catch (e: any) {
    console.error("Error:", e);
    console.error("Error-response:", e.response);
  }
}

//게시판 전체 조회

//게시판 게시글 스크랩
export async function scrapBoard(userId: number, boardId: number) {
  console.log(userId, boardId);
  try {
    const response = await axios.post("/api/boards/scrap", { userId, boardId });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//게시판 게시글 스크랩 취소
export async function cancelscrapBoard(userId: number, boardId: number) {
  try {
    const response = await axios.delete("/api/boards/scrap", {
      data: {
        userId: userId,
        boardId: boardId,
      },
    });
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
export async function updateBoard(
  boardId: number,
  title?: string,
  content?: string,
  category?: string
) {
  const data = {
    title,
    content,
    category,
  };
  try {
    const response = await axios.patch(`${REST_BOARD_API}/${boardId}`, data);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 게시판 게시글 댓글 작성
export async function createBoardComment(
  boardId: number,
  userId: number,
  content: string,
  parentId: number,
  isAnonymous: boolean
) {
  try {
    const data = { boardId, userId, content, parentId, isAnonymous };
    const response = await axios.post(
      `${REST_BOARD_API}/comments/${boardId}`,
      data
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 게시판 게시글 댓글 삭제
export async function deleteBoardComment(boardCommentId: number) {
  try {
    const response = await axios.delete(
      `${REST_BOARD_API}/comments/${boardCommentId}`
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

// 게시판 게시글 댓글 수정
export async function updateBoardComment(
  boardCommentId: number,
  content?: string
) {
  const data = { content };
  try {
    const response = await axios.patch(
      `${REST_BOARD_API}/comments/${boardCommentId}`,
      data
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}
