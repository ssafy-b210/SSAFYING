import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import styled from "styled-components";

interface Props {
  feedId: number;
  parent: (id: number | null) => void; // 부모 컴포넌트로부터 전달된 함수
  commentList: any[]; // 댓글 리스트를 상태로 받음
}

function CommentList({ feedId, parent, commentList }: Props) {
  const [highlightedCommentId, setHighlightedCommentId] = useState<
    number | null
  >(null);

  useEffect(() => {
    // 댓글 리스트가 업데이트될 때마다 효과적으로 동작하도록 설정
    console.log("Comment list updated:", commentList);
  }, [commentList]);

  const handleCommentClick = (commentId: number) => {
    parent(commentId === highlightedCommentId ? null : commentId);
    setHighlightedCommentId(
      commentId === highlightedCommentId ? null : commentId
    );
  };

  return (
    <CommentWrapper>
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
    </CommentWrapper>
  );
}

export default CommentList;

const CommentWrapper = styled.div`
  padding-bottom: 30px;
`;
