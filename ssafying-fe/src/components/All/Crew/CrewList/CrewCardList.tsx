import styled from "styled-components";
import React from "react";
import CrewCardListItem from "./CrewCardListItem";

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
    title: "서울캠 스터디 구해요",
    writer: "sooming",
    isRecruiting: false,
    content: "TESTSSTSJDFHAJFHDSJKFASJDFHSJKDFHJFHAJadfadfafdafsadfafK",
    location: "서울",
    category: "스터디",
  },
];

const CrewCardList: React.FC = () => (
  <Container>
    {cards.map((card, index) => (
      <CrewCardListItem card={card} index={index} />
    ))}
  </Container>
);

export default CrewCardList;
