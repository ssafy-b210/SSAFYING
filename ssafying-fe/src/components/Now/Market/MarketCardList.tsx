import styled from "styled-components";
import React from "react";
import MarketCardListItem from "./MarketCardListItem";

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
    title: "내 한무무 키보드 팔아요",
    price: 25000,
    isSelling: true,
    content: "우와 되나?",
    writer: "되나",
  },
  {
    title: "다른 카드",
    price: 30000,
    isSelling: false,
    content: "우와 되나?",
    writer: "되나",
  },
];

const MarketCardList: React.FC = () => (
  <Container>
    {cards.map((card, index) => (
      <MarketCardListItem card={card} index={index} />
    ))}
  </Container>
);

export default MarketCardList;
