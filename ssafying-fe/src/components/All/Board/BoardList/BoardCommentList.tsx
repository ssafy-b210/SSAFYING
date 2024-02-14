import { useState, useEffect } from "react";
import BoardCommentItem from "./BoardCommentItem";

interface Props {
  boardId: Number;
  parent: (id: Number | null) => void;
}

function BoardCommentList({ boardId, parent }: Props) {
  const [highlightedCommentId, setHighlightedCommentId] =
    useState<Number | null>(null);
  const [commentList, setCommentList] = useState<any[]>([]);

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

export default BoardCommentList;
