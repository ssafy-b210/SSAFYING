import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import deleteBtn from "../../../assets/img/imgBtn/deleteBtn.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";
import RecommentList from "./RecommentList";

interface CommentProps {
  commentId: string;
  content: string;
  isHighlighted: boolean;
  onClick: () => void;
  replies: {
    replyId: number;
    commentId: string;
    content: string;
  }[];
}

function CommentItem({
  commentId,
  content,
  isHighlighted,
  onClick,
  replies,
}: CommentProps) {
  const userId = "aeong";

  function clickDeleteBtn() {
    console.log("delete comment");
  }

  return (
    <>
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
      </UserWrapper>
      {replies.length > 0 && (
        <RecommentList onClick={clickDeleteBtn} replies={replies} />
      )}
    </>
  );
}

export default CommentItem;

const UserWrapper = styled.div<{ isHighlighted: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-top: 5px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isHighlighted ? "#f2f9f1" : "transparent"};
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