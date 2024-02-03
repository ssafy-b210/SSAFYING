import React from "react";
import styled from "styled-components";

// 카드눌렀을 때 detail 보이게 하기
interface moreProps {
  card: {
    title: string;
    writer: string;
    content: string;
    category: string;
  };
}
function BoardMoreModal({ card }: moreProps) {
  return (
    <div>
      <Card>
        <Content>
          <Title>{card.title}</Title>
          <Writer>
            <div className="small-title">By.</div>
            {card.writer}
          </Writer>
          <Category>
            <div className="small-title">카테고리</div> {card.category}
          </Category>
          <Copy>{card.content}</Copy>
        </Content>
      </Card>
    </div>
  );
}

export default BoardMoreModal;

const Card = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 20px 10px;
  width: 500px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  height: 500px;
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
