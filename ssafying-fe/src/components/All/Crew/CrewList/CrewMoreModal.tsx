import React from "react";
import styled from "styled-components";
import MoreCommentInput from "../../../Feed/Comment/CommentInput";
import CrewCommentList from "./CrewCommentList";

// 카드 눌렀을때 crew detail
interface moreProps {
  card: {
    title: string;
    writer: string;
    content: string;
    location: string;
    category: string;
    isRecruiting: boolean;
  };
}

const handleCommentSubmit = (comment: string) => {
  console.log("Comment submitted:", comment);
};

function CrewMoreModal({ card }: moreProps) {
  return (
    <div>
      <Card>
        <Content>
          <Title>{card.title}</Title>
          <Writer>
            <div className="small-title">By.</div> {card.writer}
          </Writer>
          <Location>
            <div className="small-title">지역</div>
            {card.location}
          </Location>
          <Category>
            <div className="small-title">카테고리</div>
            {card.category}
          </Category>
          <IsRecruiting>
            <div className="small-title">모집여부</div>
            {card.isRecruiting}
          </IsRecruiting>
          <Copy>{card.content}</Copy>
          <hr />
        </Content>
        <CommentContainer>
          <CrewCommentList />
          <MoreCommentInput onSubmit={handleCommentSubmit}></MoreCommentInput>
        </CommentContainer>
      </Card>
    </div>
  );
}

export default CrewMoreModal;
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
const IsRecruiting = styled.p`
  display: flex;
  flex-direction: row;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;
const Location = styled.p`
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