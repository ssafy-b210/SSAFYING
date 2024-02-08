import { axios } from "../utils/axios";

const REST_FEED_API = `/api/feeds`;

//피드 작성

//피드 삭제

//팔로잉한 유저 피드 조회

//피드상세

//피드 좋아요

//피드 좋아요 취소

//피드 좋아요 리스트

//피드 검색

//피드 수정

//피드 스크랩

//피드 스크랩 취소

//피드 댓글 조회

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

//피드 댓글 좋아요

//피드댓글 좋아요 취소

//피드 댓글 신고
