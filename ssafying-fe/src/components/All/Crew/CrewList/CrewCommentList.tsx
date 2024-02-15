import { useEffect, useState } from "react";
import CrewCommentItem from "./CrewCommentItem";
import styled from "styled-components";

interface Props {
  crewId: Number;
  parent: (id: Number | null) => void;
  commentList: any[]; // 댓글 리스트를 상태로 받음
}

function CrewCommentList({ crewId, parent, commentList }: Props) {
  const [highlightedCommentId, setHighlightedCommentId] =
    useState<Number | null>(null);

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
        <CrewCommentItem
          key={comment.id}
          commentId={comment.id}
          commentUser={comment.user}
          content={comment.content}
          isHighlighted={comment.id === highlightedCommentId}
          onClick={() => handleCommentClick(comment.id)}
          replies={comment.childComments}
          time={comment.createdAt}
        />
      ))}
    </CommentWrapper>
  );
}

export default CrewCommentList;

const CommentWrapper = styled.div`
  padding-bottom: 30px;
  overflow-y: auto;
`;
