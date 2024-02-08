import React, { useState } from "react";
import styled from "styled-components";
import MoreCommentInput from "../../../Feed/Comment/CommentInput";
import saveBtnBlack from "../../../../assets/img/imgBtn/saveBtnBlack.svg";
import saveBtnWhite from "../../../../assets/img/imgBtn/saveBtnWhite.svg";
import ImgBtn from "../../../Feed/utils/ImgBtn";
import { scrapBoard } from "../../../../apis/api/Board";
import { cancelscrapBoard } from "../../../../apis/api/Board";
import BoardCommentList from "./BoardCommentList";

// 카드눌렀을 때 detail 보이게 하기
interface moreProps {
  card: {
    title: string;
    writer: string;
    content: string;
    category: string;
  };
  boardId: number;
}

const handleCommentSubmit = (comment: string) => {
  console.log("Comment submitted:", comment);
};

function BoardMoreModal({ card, boardId }: moreProps) {
  const [isSaved, setIsSaved] = useState(false);
  const toggleSaved = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div>
      <Card>
        <Content>
          <ImgBtn
            src={isSaved ? saveBtnBlack : saveBtnWhite}
            size="30px"
            onClick={toggleSaved}
          />
          <Title>{card.title}</Title>
          <Writer>
            <div className="small-title">By.</div>
            {card.writer}
          </Writer>
          <Category>
            <div className="small-title">카테고리</div> {card.category}
          </Category>
          <Copy>{card.content}</Copy>
          <hr />
        </Content>
        <CommentContainer>
          <BoardCommentList />
          <MoreCommentInput
            onSubmit={handleCommentSubmit}
            target="board"
          ></MoreCommentInput>
        </CommentContainer>
      </Card>
    </div>
  );
}

export default BoardMoreModal;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 10px;
  width: 500px;
  height: 90%;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s linear;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  z-index: 1;
  hr {
    width: 90%;
  }
`;
const Title = styled.h1`
  font-size: 20px;
`;

const Copy = styled.p`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  line-height: 1.35;
  width: 100%;
  height: 100px;
`;
const Writer = styled.p`
  display: flex;
  flex-direction: row;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;
const Category = styled.p`
  display: flex;
  flex-direction: row;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  background-color: white;
`;
