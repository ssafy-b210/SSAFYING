import React from "react";
import styled from "styled-components";

// 카드눌렀을 때 detail 보이게 하기
interface moreProps {
  card: {
    title: string;
    content: string;
  };
}
function BoardMoreModal({ card }: moreProps) {
  return (
    <div>
      <Card>
        <Content>
          <Title>{card.title}</Title>
          <Copy>{card.content} 전</Copy>
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
  width: 200px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  height: 250px;
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
const Title = styled.h2`
  font-size: 15px;
`;
const Copy = styled.p`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  line-height: 1.35;
  width: 100%;
  height: 100px;
`;
