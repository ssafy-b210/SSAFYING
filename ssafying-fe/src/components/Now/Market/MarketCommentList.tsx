import { useState } from "react";
import MarketCommentItem from "./MarketCommentItem";

function MarketCommentList() {
  const [highlightedCommentId, setHighlightedCommentId] = useState<
    string | null
  >(null);

  const comments = [
    {
      commentId: "aeong",
      content: "ㅋㅋㅋㅋㅋ",
      replies: [
        { replyId: 1, commentId: "aeong", content: "ㅎㅎㅎㅎ" },
        { replyId: 2, commentId: "yes", content: "뭐야" },
        { replyId: 2, commentId: "yes", content: "뭐야" },
        { replyId: 2, commentId: "yes", content: "뭐야" },
        { replyId: 2, commentId: "yes", content: "뭐야" },
      ],
    },
    {
      commentId: "yes",
      content: "ㅋㅋㅋㅋㅋ",
      replies: [
        { replyId: 1, commentId: "yes.hh", content: "안녕" },
        { replyId: 2, commentId: "yes", content: "뭐야" },
        { replyId: 2, commentId: "yes", content: "뭐야" },
        { replyId: 2, commentId: "yes", content: "뭐야" },
      ],
    },
    { commentId: "yes.hh", content: "안녕ㅎㅎ", replies: [] },
  ];

  const handleCommentClick = (commentId: string) => {
    setHighlightedCommentId(
      commentId === highlightedCommentId ? null : commentId
    );
  };

  return (
    <div>
      {comments.map((comment) => (
        <MarketCommentItem
          key={comment.commentId}
          commentId={comment.commentId}
          content={comment.content}
          isHighlighted={comment.commentId === highlightedCommentId}
          onClick={() => handleCommentClick(comment.commentId)}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}

export default MarketCommentList;
