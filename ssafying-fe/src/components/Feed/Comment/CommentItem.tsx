import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import deleteBtn from "../../../assets/img/imgBtn/deleteBtn.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";
import RecommentItem from "./RecommentItem";

interface CommentProps {
  commentId: string;
  userId: string;
  content: string;
  isHighlighted: boolean;
  onClick: () => void;
}

function CommentItem({
  commentId,
  userId,
  content,
  isHighlighted,
  onClick,
}: CommentProps) {
  function clickDeleteBtn() {
    console.log("delete comment");
  }

  const replies = [
    { replyId: 1, commentId: "aeong", userId: "aeong", content: "ㅎㅎㅎㅎ" },
    { replyId: 2, commentId: "yes", userId: "aeong", content: "뭐야" },
    { replyId: 3, commentId: "yes.hh", userId: "aeong", content: "안녕" },
  ];

  return (
    <UserWrapper isHighlighted={isHighlighted} onClick={onClick}>
      <RoundImg src={userImage} size="32px" />
      <CommentContent>
        <UserId>{commentId}</UserId>
        <Content>{content}</Content>
      </CommentContent>
      <ButtonsWrapper>
        <TextBtn onClick={onClick}>답글달기</TextBtn>
        {commentId === userId && (
          <ImgBtn src={deleteBtn} onClick={clickDeleteBtn} size="15px" />
        )}
      </ButtonsWrapper>

      {replies.length > 0 && (
        <RecommentList>
          {replies.map((reply) => (
            <RecommentItem
              key={reply.replyId}
              userId={reply.userId}
              content={reply.content}
              onClickDelete={() => clickDeleteBtn()}
            />
          ))}
        </RecommentList>
      )}
    </UserWrapper>
  );
}

export default CommentItem;

const UserWrapper = styled.div<{ isHighlighted: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${(props) =>
    props.isHighlighted ? "rgba(0, 0, 0, 0.05)" : "transparent"};
`;

const CommentContent = styled.div`
  margin-left: 8px;
`;

const UserId = styled.div`
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 14px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const TextBtn = styled.div`
  font-size: 12px;
  color: #385185;
  cursor: pointer;
  margin-right: 10px;
`;

const RecommentList = styled.div`
  margin-top: 8px;
  padding-left: 40px;
`;
