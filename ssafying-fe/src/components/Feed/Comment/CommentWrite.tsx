import React from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import deleteBtn from "../../../assets/img/imgBtn/deleteBtn.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";

interface commentProps {
  commentId: string;
  userId: string;
  content: string;
}

function CommentItem({ commentId, userId, content }: commentProps) {
  function clickDeleteBtn() {
    console.log("delete comment");
  }

  return (
    <UserWrapper>
      <Comment>
        <RoundImg src={userImage} size="40px" />
        <div>
          <UserId>{commentId}</UserId>
          <Content>{content}</Content>
          <TextBtn>답글달기</TextBtn>
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

const UserWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserId = styled.div`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
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
`;
