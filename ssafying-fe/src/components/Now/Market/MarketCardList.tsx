import styled from "styled-components";
import React from "react";
import MarketCardListItem from "./MarketCardListItem";

interface MarketCardListProps {
  selectedCategory: string | null;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 30px;
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
    category: "팝니다",
  },
  {
    title: "이수민 사요",
    price: 30000,
    isSelling: false,
    content: "우와 되나?",
    writer: "되나",
    category: "삽니다",
  },
];

const MarketCardList: React.FC<MarketCardListProps> = ({
  selectedCategory,
}) => {
  const filteredCards = selectedCategory
    ? cards.filter((card) => card.category === selectedCategory)
    : cards;

  return (
    <Container>
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <MarketCardListItem key={index} card={card} index={index} />
        ))
      ) : (
        <NoResultsMessage>
          해당 카테고리에 대한 게시물이 존재하지 않습니다.
        </NoResultsMessage>
      )}
    </Container>
  );
};

export default MarketCardList;
const NoResultsMessage = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40%;
  margin-right: 15%;
  margin-left: 15%;
`;
