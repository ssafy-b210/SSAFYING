import styled from "styled-components";
import React, { useEffect, useState } from "react";
import CrewCardListItem from "./CrewCardListItem";
import { selectCrewList } from "../../../../apis/api/Crew";

interface CrewCardListProps {
  selectedCategory: string;
  selectedLocation: string;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // padding: 0 30px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CrewCardList: React.FC<CrewCardListProps> = ({
  selectedCategory,
  selectedLocation,
}) => {
  const [cards, setCards] = useState<
    {
      title: string;
      nickname: string;
      isRecruit: boolean;
      category: string;
      region: string;
      content: string;
      crewId: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const crewData = await selectCrewList({
          title: "",
          category: selectedCategory,
          region: selectedLocation,
        });
        if (crewData && crewData.resultData) {
          setCards(crewData.resultData);
        }
      } catch (error) {
        console.error(error);
        setCards([]);
      }
    };
    fetchData();
  }, [selectedCategory, selectedLocation]);
  return (
    <>
      {cards.length > 0 ? (
        <Container>
          {cards.map((card, index) => {
            console.log("card", card);
            return <CrewCardListItem key={index} card={card} index={index} />;
          })}
        </Container>
      ) : (
        <NoResultsMessage>검색 결과가 없습니다.</NoResultsMessage>
      )}
    </>
  );
};

export default CrewCardList;

const NoResultsMessage = styled.div`
  padding-top: 40%;
  display: flex;
  justify-content: center;
  align-items: center; /* Align text vertically */
  width: 100%; /* Take up full width */
`;
