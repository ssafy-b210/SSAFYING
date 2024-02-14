import React, { useState } from "react";
import styled from "styled-components";
import ImgBtn from "../../../Feed/utils/ImgBtn";
import deleteBtn from "../../../../assets/img/imgBtn/deleteBtn.svg";
import CrewRecommentList from "./CrewRecommentList";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import { deleteCrew, deleteCrewComment } from "../../../../apis/api/Crew";

interface CommentProps {
  commentId: number;
  commentUser: {
    id: Number;
    nickname: string;
  };
  content: string;
  isHighlighted: boolean;
  onClick: () => void;
  replies: any[];
}

function CrewCommentItem({
  commentId,
  commentUser,
  content,
  isHighlighted,
  onClick,
  replies,
}: CommentProps) {
  const user = useAppSelector(selectUser);

  async function clickDeleteBtn() {
    await deleteCrewComment(commentId);
  }
  return (
    <>
      <UserWrapper isHighlighted={isHighlighted} onClick={onClick}>
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
      {replies.length > 0 && <CrewRecommentList replies={replies} />}
    </>
  );
}

export default CrewCommentItem;

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
