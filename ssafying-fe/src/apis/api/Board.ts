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
export async function selectAllBoard(
  searchCategory?: string,
  searchWord?: string
) {
  try {
    let url = "/api/boards";
    if (searchCategory && searchWord) {
      url += `?searchCategory=${searchCategory}&searchWord=${searchWord}`;
    } else if (searchCategory) {
      url += `?searchCategory=${searchCategory}`;
    } else if (searchWord) {
      url += `?searchWord=${searchWord}`;
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

//게시판 게시글 스크랩
export async function scrapBoard(userId: number, boardId: number) {
  const data = {
    userId: userId,
    boardId: boardId,
  };

  console.log(data);

  try {
    const response = await axios.post("/api/boards/scrap", data);
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
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// 게시판 게시글 상세 조회
export async function selectOneBoard(boardId: number, userId: number) {
  try {
    const response = await axios.get(`/api/boards/${boardId}`, {
      params: {
        userId: userId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 게시판 게시글 삭제
export async function deleteBoard(boardId: number) {
  try {
    const response = await axios.delete(`${REST_BOARD_API}/${boardId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting board:", error);
    throw error;
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
  boardId: Number,
  userId: Number,
  content: string,
  parentId?: Number
) {
  const data = {
    boardId: boardId,
    userId: userId,
    content: content,
    parentId: parentId,
  };
  try {
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
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// 게시판 게시글 댓글 수정 - 보류
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
