import { useState } from "react";
import CrewCommentItem from "./CrewCommentItem";
import { comment } from "@uiw/react-md-editor";

interface Props {
  crewId: Number;
  parent: (id: Number | null) => void;
}

function CrewCommentList({ crewId, parent }: Props) {
  const [highlightedCommentId, setHighlightedCommentId] =
    useState<Number | null>(null);
  const [commentList, setCommentList] = useState<any[]>([]);

  const handleCommentClick = (commentId: number) => {
    parent(commentId === highlightedCommentId ? null : commentId);
    setHighlightedCommentId(
      commentId === highlightedCommentId ? null : commentId
    );
  };

  return (
    <div>
      {commentList.map((comment) => (
        <CrewCommentItem
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

export default CrewCommentList;
