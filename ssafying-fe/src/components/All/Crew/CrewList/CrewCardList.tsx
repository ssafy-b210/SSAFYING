import styled from "styled-components";
import React, { useEffect, useState } from "react";
import CrewCardListItem from "./CrewCardListItem";
import { selectCrewList } from "../../../../apis/api/Crew";

interface CrewCardListProps {
  selectedCategory: string | null;
  // selectedLocation: string;
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
  // selectedLocation,
}) => {
  const [cards, setCards] = useState<
    {
      title: string;
      writer: string;
      isRecruit: boolean;
      category: string;
      region: string;
      content: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const crewData = await selectCrewList(selectedCategory ?? undefined);
        console.log(selectedCategory);
        if (crewData && crewData.resultData) {
          const newCards = await crewData.resultData.map((res: any) => ({
            title: res.title,
            writer: res.nickname,
            isRecruit: res.isRecruit,
            category: res.category,
            region: res.region,
            content: res.content,
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
    <>
      {cards.length > 0 ? (
        <Container>
          {cards.map((card, index) => (
            <CrewCardListItem key={index} card={card} index={index} />
          ))}
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
