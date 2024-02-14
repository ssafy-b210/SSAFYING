import { useState, useEffect } from "react";
import BoardCommentItem from "./BoardCommentItem";

interface Props {
  boardId: Number;
  parent: (id: Number | null) => void;
  commentList: {
    anonymous: boolean;
    childCommentList: any[];
    comment: string;
    createdAt: string;
    nickname: string;
    userName: string;
    commentId: number;
    profileImgUrl: string;
    userId: number;
  }[];
}

function BoardCommentList({ boardId, parent, commentList }: Props) {
  const [highlightedCommentId, setHighlightedCommentId] =
    useState<Number | null>(null);

  const handleCommentClick = (commentId: number) => {
    parent(commentId === highlightedCommentId ? null : commentId); // 클릭된 댓글 ID를 부모 컴포넌트로 전달
    setHighlightedCommentId(
      commentId === highlightedCommentId ? null : commentId
    );
  };

  return (
    <div>
      {commentList.map((comment) => (
        <BoardCommentItem
          key={comment.commentId}
          commentId={comment.commentId}
          nickname={comment.nickname}
          content={comment.comment}
          userId={comment.userId}
          time={comment.createdAt}
          profile={comment.profileImgUrl}
          isHighlighted={comment.commentId === highlightedCommentId}
          onClick={() => handleCommentClick(comment.commentId)}
          replies={comment.childCommentList}
        />
      ))}
    </div>
  );
}

export default BoardCommentList;
