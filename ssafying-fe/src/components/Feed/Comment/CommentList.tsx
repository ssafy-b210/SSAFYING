import { useState } from "react";
import CommentItem from "./CommentItem";

function CommentList() {
  const [highlightedCommentId, setHighlightedCommentId] =
    useState<Number | null>(null);

  const comments = [
    {
      commentId: 1,
      nickname: "aeong",
      content: "ㅋㅋㅋㅋㅋ",
      replies: [
        {
          replyId: 1,
          commentId: 2,
          nickname: "aeong",
          content: "ㅎㅎㅎㅎ",
        },
        { replyId: 2, commentId: 1, nickname: "aeong", content: "뭐야" },
        { replyId: 2, commentId: 1, nickname: "aeong", content: "뭐야" },
      ],
    },
    {
      commentId: 1,
      nickname: "yes",
      content: "화이팅",
      replies: [
        { replyId: 1, commentId: 5, nickname: "yes.hh", content: "안녕" },
        { replyId: 2, commentId: 3, nickname: "yes", content: "애옹" },
      ],
    },
    {
      commentId: 1,
      nickname: "yes.hh",
      content: "안녕ㅎㅎ",
      replies: [
        { replyId: 1, commentId: 5, nickname: "yes.hh", content: "안녕" },
        { replyId: 2, commentId: 3, nickname: "yes", content: "애옹" },
      ],
    },
  ];

  const handleCommentClick = (commentId: number) => {
    setHighlightedCommentId(
      commentId === highlightedCommentId ? null : commentId
    );
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          commentId={comment.commentId}
          nickname={comment.nickname}
          content={comment.content}
          isHighlighted={comment.commentId === highlightedCommentId}
          onClick={() => handleCommentClick(comment.commentId)}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}

export default CommentList;
