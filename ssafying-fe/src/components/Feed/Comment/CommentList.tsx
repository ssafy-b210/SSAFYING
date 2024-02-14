import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { getFeedComment } from "../../../apis/api/Feed";

interface Props {
  feedId: Number;
  parent: (id: Number | null) => void; // 부모 컴포넌트로부터 전달된 함수
}

function CommentList({ feedId, parent }: Props) {
  const [highlightedCommentId, setHighlightedCommentId] =
    useState<Number | null>(null);
  const [commentList, setCommentList] = useState<any[]>([]);

  useEffect(() => {
    handleCommentList();
  }, []);

  const handleCommentList = async () => {
    const list = await getFeedComment(feedId);
    console.log(list);
    setCommentList(list || []);
  };

  const handleCommentClick = (commentId: Number) => {
    parent(commentId === highlightedCommentId ? null : commentId); // 클릭된 댓글 ID를 부모 컴포넌트로 전달
    setHighlightedCommentId(
      commentId === highlightedCommentId ? null : commentId
    ); // 댓글 ID를 업데이트
  };

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.id}
          commentId={comment.id}
          commentUser={comment.user}
          content={comment.content}
          isHighlighted={comment.id === highlightedCommentId}
          onClick={() => handleCommentClick(comment.id)}
          replies={comment.childComments}
        />
      ))}
    </div>
  );
}

export default CommentList;
