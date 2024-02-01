import React from "react";
import styled from "styled-components";
import BambooForestListItem from "./BambooForestListItem";

// styled-components를 사용하여 스타일 정의
const Container = styled.div`
  display: flex;
  padding: 5% 5%;
  margin: 0 auto;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const cards = [
  {
    time: "1시간",
    content: "나 사실 좋아하는 사람 있다. 싸피 대전캠 2반에,,,",
  },
  {
    time: "2시간",
    content: "대전 요즘 점심 왤케 맛있어",
  },
  {
    time: "3시간",
    content: " TESTTEST TEST TEST TEST TEST TEST TEST TEST",
  },
  {
    time: "4시간",
    content: "Seriously, straight up, just blast off into outer space today",
  },
  {
    time: "3시간",
    content: " TESTTEST TEST TEST TEST TEST TEST TEST TEST",
  },
  {
    time: "4시간",
    content: "Seriously, straight up, just blast off into outer space today",
  },
  {
    time: "3시간",
    content: " TESTTEST TEST TEST TEST TEST TEST TEST TEST",
  },
  {
    time: "3시간",
    content: " TESTTEST TEST TEST TEST TEST TEST TEST TEST",
  },
];

const BambooForestList: React.FC = () => (
  <Container>
    {cards.map((card, index) => (
      <BambooForestListItem card={card} index={index} />
    ))}
  </Container>
);

export default BambooForestList;
