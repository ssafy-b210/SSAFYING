import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BoardCardListItem from "./BoardCardListItem";
import { selectAllBoard } from "../../../../apis/api/Board";

interface BoardCardListProps {
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

// const cards = [
//   {
//     title: "유온역 맛집",
//     writer: "애옹",
//     content: "숙취용 부탁해",
//     category: "자유",
//   },
//   {
//     title: "유온역 맛집 추천받아요 123456",
//     writer: "ssafy1@ssafy.com",
//     content:
//       "숙취용 부탁해 dkdkdkdkkdkdkdflksajfkdjfsjfldjalkjfaklsjfsdjflakjfksdjfklajfkjflkdsajfkjflksajfkljklsdfasdfasdfasdfafsdasdfadfa",
//     category: "취업",
//   },
//   {
//     title: "유온역 맛집 추천받아요",
//     writer: "sueun",
//     content: "숙취용 부탁해",
//     category: "정보",
//   },
//   {
//     title: "유온역 맛집 추천받아요",
//     writer: "sueun",
//     content: "숙취용 부탁해",
//     category: "자유",
//   },
// ];

const BoardCardList: React.FC<BoardCardListProps> = ({ selectedCategory }) => {
  const [cards, setCards] = useState<
    { title: string; writer: string; content: string; category: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boardData = await selectAllBoard();
        setCards(boardData);
      } catch (error) {
        console.error("Error fetching board data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredCards = selectedCategory
    ? cards.filter((card) => card.category === selectedCategory)
    : cards;

  return (
    <Container>
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <BoardCardListItem key={index} card={card} index={index} />
        ))
      ) : (
        <NoResultsMessage>
          해당 카테고리에 대한 게시물이 존재하지 않습니다.
        </NoResultsMessage>
      )}
    </Container>
  );
};

export default BoardCardList;

const NoResultsMessage = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40%;
  margin-right: 15%;
  margin-left: 15%;
`;
