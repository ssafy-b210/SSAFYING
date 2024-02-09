import { useState } from "react";
import BoardCommentItem from "./BoardCommentItem";

function BoardCommentList() {
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
      {comments.map((comment) => (
        <BoardCommentItem
          key={comment.commentId}
          commentId={comment.commentId}
          content={comment.content}
          nickname={comment.nickname}
          isHighlighted={comment.commentId === highlightedCommentId}
          onClick={() => handleCommentClick(comment.commentId)}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}

export default BoardCommentList;
