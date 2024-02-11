import styled from "styled-components";
import React, { useEffect, useState } from "react";
import CrewCardListItem from "./CrewCardListItem";
import { selectCrewList } from "../../../../apis/api/Crew";

interface CrewCardListProps {
  selectedCategory: string | null;
  isRecruitingChecked: boolean;
  selectedLocation: string;
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

const CrewCardList: React.FC<CrewCardListProps> = ({
  selectedCategory,
  isRecruitingChecked,
  selectedLocation,
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

  const [lastIdx, setLastIdx] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const crewData = await selectCrewList();
        if (crewData && crewData.resultData) {
          setLastIdx(lastIdx + 1);
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
  }, []);
  return (
    <Container>
      {cards.map((card, index) => (
        <CrewCardListItem key={index} card={card} index={index} />
      ))}
    </Container>
  );
};

export default CrewCardList;

const NoResultsMessage = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40%;
  margin-right: 15%;
  margin-left: 15%;
`;
