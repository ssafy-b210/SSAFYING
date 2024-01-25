import { CrewCardList } from "./CrewCardList";
import styled from "styled-components";
import React from "react";

type CardsProps = {
  info: CrewCardList;
};

const Cards: React.FC<CardsProps> = ({ info }) => {
  const { title, nickname, isRecruiting } = info;
  return (
    <StyledCards>
      <p>{title}</p>
      <p>{nickname}</p>
      <p>{isRecruiting.toString()}</p>
    </StyledCards>
  );
};

const StyledCards = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid #c4c4c4;
  border-radius: 20px;
  margin: 20px;
`;

export default Cards;
