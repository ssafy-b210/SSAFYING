import React, { useState } from "react";
import styled from "styled-components";
import deleteBtn from "../../../assets/img/imgBtn/deleteBtn.svg";
import profileImage from "../../../assets/img/userIcons/profileImage.jpg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";
import RecommentList from "./RecommentList";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { deleteFeedComment } from "../../../apis/api/Feed";

interface CommentProps {
  commentId: number;
  commentUser: {
    id: Number;
    nickname: string;
    profileImageUrl?: string;
  };
  content: string;
  isHighlighted: boolean;
  onClick: () => void;
  replies: any[];
  onDelete: (id: number) => void;
}

function CommentItem({
  commentId,
  commentUser,
  content,
  isHighlighted,
  onClick,
  replies,
  onDelete,
}: CommentProps) {
  const user = useAppSelector(selectUser);
  const profileImageUrl = commentUser.profileImageUrl || profileImage;

  async function clickDeleteBtn() {
    onDelete(commentId);
  }

  return (
    <>
      <UserWrapper isHighlighted={isHighlighted} onClick={onClick}>
        <RoundImg src={profileImageUrl} size="28px" />
        <CommentContent>
          <UserId>{commentUser.nickname}</UserId>
          <Content>{content}</Content>
        </CommentContent>
        <ButtonsWrapper>
          <TextBtn onClick={onClick}>답글달기</TextBtn>
          {commentUser.id === user.userId && (
            <ImgBtn src={deleteBtn} onClick={clickDeleteBtn} size="15px" />
          )}
        </ButtonsWrapper>
      </UserWrapper>
      {replies.length > 0 && (
        <RecommentList replies={replies} onDelete={onDelete} />
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
    props.isHighlighted ? "#e9feff" : "transparent"};
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
