import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import deleteBtn from "../../../assets/img/imgBtn/deleteBtn.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";

interface commentProps {
  commentId: string;
  userId: string;
  content: string;
  isHighlighted: boolean;
}

function CommentItem({
  commentId,
  userId,
  content,
  isHighlighted,
}: commentProps) {
  function clickDeleteBtn() {
    console.log("delete comment");
  }

  function clickRecommentBtn() {
    // Toggle the highlight state
    setIsHighlighted(!isHighlighted);
  }

  return (
    <UserWrapper isHighlighted={isHighlighted}>
      <Comment>
        <RoundImg src={userImage} size="40px" />
        <div>
          <UserId>{commentId}</UserId>
          <Content>{content}</Content>
          <TextBtn onClick={clickRecommentBtn}>답글달기</TextBtn>
        </div>
      </Comment>
      {commentId === userId && (
        <div>
          <ImgBtn src={deleteBtn} onClick={clickDeleteBtn} size="15px" />
        </div>
      )}
    </UserWrapper>
  );
}

export default CommentItem;

const UserWrapper = styled.div<{ isHighlighted: boolean }>`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isHighlighted ? "lightyellow" : "transparent"};
`;

const UserId = styled.div`
  margin-left: 5px;
  font-weight: bold;
  line-height: 1.1;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 3px;
  }
`;

const Content = styled.div`
  font-size: 12px;
`;

const TextBtn = styled.div`
  font-size: 9px;
  font-weight: bold;
  color: gray;
  cursor: pointer; // Add this to show it's clickable
`;
