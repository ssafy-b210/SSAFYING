import React from "react";
import styled from "styled-components";

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

function CrewMoreModal({ card }: moreProps) {
  return (
    <div>
      <Card>
        <Content>
          <Title>{card.title}</Title>
          <Writer>by. {card.writer}</Writer>
          <Location>{card.location}</Location>
          <Category>{card.category}</Category>
          <IsRecruiting>{card.isRecruiting}</IsRecruiting>
          <Copy>{card.content}</Copy>
        </Content>
      </Card>
    </div>
  );
}

export default CrewMoreModal;
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
const Writer = styled.p``;
const IsRecruiting = styled.p``;
const Location = styled.p``;
const Category = styled.p``;
