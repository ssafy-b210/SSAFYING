import styled from "styled-components";
import React from "react";
import CrewCardListItem from "./CrewCardListItem";

interface CrewCardListProps {
  selectedCategory: string | null;
}

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
    title: "대전캠 스터디 구해요",
    writer: "su00",
    isRecruiting: true,
    content: "누구누구?",
    location: "대전",
    category: "스터디",
  },
  {
    title: "서울캠 스터디 구해",
    writer: "sooming",
    isRecruiting: false,
    content: "TESTSSTSJDFHAJFHDSJKFASJDFHSJKDFHJFHAJadfadfafdafsadfafK",
    location: "서울",
    category: "번개 회식",
  },
];

const CrewCardList: React.FC<CrewCardListProps> = ({ selectedCategory }) => {
  const filteredCards = selectedCategory
    ? cards.filter((card) => card.category === selectedCategory)
    : cards;

  return (
    <Container>
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <CrewCardListItem key={index} card={card} index={index} />
        ))
      ) : (
        <NoResultsMessage>
          해당 카테고리에 대한 게시물이 존재하지 않습니다.
        </NoResultsMessage>
      )}
    </Container>
  );
};

export default CrewCardList;

const NoResultsMessage = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40%;
`;
