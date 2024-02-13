import { axios } from "../utils/axios";

const REST_FEED_API = `/api/feeds`;

//피드 작성
export async function createFeedItem(
  userId: number,
  content: string,
  imageUrls: string[],
  hashtags: string[]
) {
  const data = {
    userId: userId,
    content: content,
    imageUrls: imageUrls,
    hashtags: hashtags,
  };
  try {
    const response = await axios.post(`api/feeds`, data);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//피드 삭제
export async function deleteFeedItem(feedId: number) {
  try {
    const response = await axios.delete(`api/feeds/${feedId}`);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//팔로잉한 유저 피드 조회
export async function getFeedList(userId: number) {
  try {
    const response = await axios.get(`/api/feeds/${userId}/list`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

//피드상세
export async function getFeedDetail(feedId: number) {
  try {
    const response = await axios.get(`/api/feeds/${feedId}`);
    console.log(response.data.resultData);
    return response.data.resultData;
  } catch (e) {
    console.log(e);
  }
}

//피드 좋아요
export async function likeFeed(userId: number, feedId: number) {
  try {
    const response = await axios.post("/api/feeds/like", { userId, feedId });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//피드 좋아요 취소
export async function cancelLikeFeed(userId: number, feedId: number) {
  try {
    const response = await axios.delete("/api/feeds/like", {
      data: {
        userId: userId,
        feedId: feedId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

//피드 좋아요 리스트

//피드 해시태그 검색
export async function getFeedSearchHashtag(hashtag: string) {
  try {
    const response = await axios.get(`${REST_FEED_API}/search`, {
      params: {
        hashtag: hashtag,
      },
    });
    console.log(response.data.resultData);
    return response.data.resultData;
  } catch (e) {
    console.log(e);
  }
}

//피드 해시태그 검색
export async function getFeedSearchNickname(nickname: string) {
  try {
    const response = await axios.get(`api/users/search`, {
      params: {
        nickname: nickname,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

//피드 수정

//피드 스크랩
export async function scrapFeed(userId: number, feedId: number) {
  try {
    const response = await axios.post("/api/feeds/scrap", { userId, feedId });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//피드 스크랩 취소
export async function cancelscrapFeed(userId: number, feedId: number) {
  try {
    const response = await axios.delete("/api/feeds/scrap", {
      data: {
        userId: userId,
        feedId: feedId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

//피드 댓글 조회
export async function getFeedComment(feedId: number) {
  try {
    const response = await axios.get(`/api/feeds/${feedId}/comments`);
    console.log(response.data.resultData);
    return response.data.resultData;
  } catch (e) {
    console.log(e);
  }
}

//피드 댓글 작성
export async function createFeedComment(
  feedId: number,
  userId: number,
  content: string,
  parentId?: number //부모댓글의 아이디
) {
  const data = {
    feedId: feedId,
    userId: userId,
    content: content,
    parentId: parentId,
  };
  try {
    const response = await axios.post(
      `${REST_FEED_API}/${feedId}/comments`,
      data
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//피드 댓글 삭제
export async function deleteFeedComment(feedCommentId: number) {
  try {
    const response = await axios.delete(`api/feeds/comments/${feedCommentId}`);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//피드 댓글 좋아요

//피드댓글 좋아요 취소

//피드 댓글 신고
