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
export async function deleteFeedItem(feedId: Number) {
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
    console.log(response.data.resultData);
    return response.data.resultData;
  } catch (e) {
    console.log(e);
  }
}

//추천 피드 조회
export async function getRecommendFeedList(userId: number) {
  try {
    const response = await axios.get(`/api/feeds/${userId}/recommend`);
    console.log(response.data.resultData);
    return response.data.resultData;
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
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

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

//피드 닉네임 검색
export async function getFeedSearchNickname(nickname: string) {
  try {
    const response = await axios.get(`api/users/search`, {
      params: {
        nickname: nickname,
      },
    });
    console.log(response.data.resultData);
    return response.data.resultData;
  } catch (e) {
    console.log(e);
  }
}

//피드 좋아요 리스트
export async function getFeedLikeList(feedId: number, userId: number) {
  try {
    const response = await axios.get(`/api/feeds/${feedId}/like`);

    return response.data.resultData.some((like: any) => like.userId === userId);
  } catch (e) {
    console.log(e);
    return false;
  }
}

//피드 스크랩여부
export async function getIsScrapped(
  userId: number,
  feedId: number
): Promise<boolean> {
  try {
    // API 호출하여 스크랩 여부를 받아옴
    const response = await axios.get(`api/feeds/scrap/${userId}/${feedId}`);

    // 받아온 데이터를 리턴
    console.log("스크랩여부", response.data.resultData);
    return response.data.resultData;
  } catch (error) {
    // 에러 발생 시 에러 로그 출력 후 false 리턴
    console.error("Error fetching feed scrap status:", error);
    return false;
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
export async function getFeedComment(feedId: Number) {
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
  feedId: Number,
  userId: Number,
  content: string,
  parentId?: Number //부모댓글의 아이디
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
export async function deleteFeedComment(feedCommentId: Number) {
  try {
    const response = await axios.delete(`api/feeds/comments/${feedCommentId}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

//피드 댓글 좋아요

//피드댓글 좋아요 취소

//피드 댓글 신고
