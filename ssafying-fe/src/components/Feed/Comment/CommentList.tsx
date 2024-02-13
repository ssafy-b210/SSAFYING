import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { getFeedComment } from "../../../apis/api/Feed";

interface Props {
  feedId: number;
}

function CommentList({ feedId }: Props) {
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

  const handleCommentClick = (commentId: number) => {
    setHighlightedCommentId(
      commentId === highlightedCommentId ? null : commentId
    );
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
