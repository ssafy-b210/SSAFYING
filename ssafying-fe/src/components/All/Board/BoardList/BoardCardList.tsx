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

const BoardCardList: React.FC<BoardCardListProps> = ({ selectedCategory }) => {
  const [cards, setCards] = useState<
    { title: string; writer: string; content: string; category: string }[]
  >([]);

  const [lastIdx, setLastIdx] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boardData = await selectAllBoard(selectedCategory ?? undefined);
        console.log(boardData);
        if (boardData && boardData.resultData) {
          setLastIdx(lastIdx + 1);
          const newCards = await boardData.resultData.map((res: any) => ({
            title: res.title,
            writer: res.anonymous ? "익명" : res.nickname,
            content: res.content,
            category: res.category,
          }));
          setCards(newCards);
        }
      } catch (error) {
        console.error(error);
        setCards([]);
      }
    };
    fetchData();
  }, [selectedCategory]);
  return (
    <Container>
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <BoardCardListItem key={index} card={card} index={index} />
        ))
      ) : (
        <NoResultsMessage>검색 결과가 없습니다.</NoResultsMessage>
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
