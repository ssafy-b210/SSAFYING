import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BambooForestListItem from "./BambooForestListItem";
import { selectBambooList } from "../../apis/api/Forest";

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

const BambooForestList: React.FC = () => {
  const [cards, setCards] = useState<
    { content: string; bambooId: number; createdAt: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await selectBambooList();
        console.log(data.resultData.title);
        setCards(data.resultData.title);
      } catch (error) {
        console.error("Error fetching bamboo list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {cards.length > 0 ? (
        <Container>
          {cards.map((card, index) => (
            <BambooForestListItem key={index} card={card} index={index} />
          ))}
        </Container>
      ) : (
        <NoResultsMessage>검색 결과가 없습니다.</NoResultsMessage>
      )}
    </>
  );
};

export default BambooForestList;

const NoResultsMessage = styled.div`
  color: white;
  display: flex;
  justify-contnet: center;
  text-align: center;
  align-items: center;
`;
