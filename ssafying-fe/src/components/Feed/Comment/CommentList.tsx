import { useState } from "react";
import CommentItem from "./CommentItem";

function CommentList() {
  const [highlightedCommentId, setHighlightedCommentId] = useState<string | null>(
    null
  );

  const comments = [
    { commentId: "aeong", userId: "aeong", content: "ㅋㅋㅋㅋㅋ" },
    { commentId: "yes", userId: "aeong", content: "ㅋㅋㅋㅋㅋ" },
    { commentId: "yes.hh", userId: "aeong", content: "안녕ㅎㅎ" },
  ];

  const handleCommentClick = (commentId: string) => {
    setHighlightedCommentId(commentId === highlightedCommentId ? null : commentId);
  };

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.commentId}
          commentId={comment.commentId}
          userId={comment.userId}
          content={comment.content}
          isHighlighted={comment.commentId === highlightedCommentId}
          onClick={() => handleCommentClick(comment.commentId)}
        />
      ))}
    </div>
  );
}

export default CommentList;
