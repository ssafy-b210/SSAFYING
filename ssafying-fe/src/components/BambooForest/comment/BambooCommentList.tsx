import React, { useEffect } from "react";
import BambooCommentItem from "./BambooCommentItem";
import styled from "styled-components";

interface Props {
  commentList: {
    commentId: number;
    content: string;
    createAt: string;
    userId: number;
  }[];
}

function BambooCommentList({ commentList }: Props) {
  useEffect(() => {
    // 댓글 리스트가 업데이트될 때마다 효과적으로 동작하도록 설정
    console.log("Comment list updated:", commentList);
  }, [commentList]);

  console.log(commentList);
  return (
    <CommentWrapper>
      {commentList.map((comment) => (
        <BambooCommentItem
          key={comment.commentId}
          commentId={comment.commentId}
          content={comment.content}
          userId={comment.userId}
        />
      ))}
    </CommentWrapper>
  );
}

export default BambooCommentList;

const CommentWrapper = styled.div`
  padding-bottom: 30px;
  width: 100%;
`;
