import React from "react";
import styled from "styled-components";
import BoardCardListItem from "./BoardCardListItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const cards = [
  {
    title: "유온역 맛집 추천받아요",
    writer: "sueun",
    content: "숙취용 부탁해",
    category: "자유",
  },
  {
    title: "유온역 맛집 추천받아요",
    writer: "sueun",
    content: "숙취용 부탁해",
    category: "자유",
  },
  {
    title: "유온역 맛집 추천받아요",
    writer: "sueun",
    content: "숙취용 부탁해",
    category: "자유",
  },
  {
    title: "유온역 맛집 추천받아요",
    writer: "sueun",
    content: "숙취용 부탁해",
    category: "자유",
  },
];

const BoardCardList: React.FC = () => (
  <Container>
    {cards.map((card, index) => (
      <BoardCardListItem card={card} index={index} />
    ))}
  </Container>
);

export default BoardCardList;
