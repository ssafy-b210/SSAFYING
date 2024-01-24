import styled from "styled-components";
import React from "react";

function CrewCardList() {
  const [cardInfo, setCardInfo] = React.useState<CrewCardList[]>([]);

  return (
    <CrewCardContainer>
      {cardInfo.map((info, idx) => (
        <Cards info={info} key={idx} />
      ))}
    </CrewCardContainer>
  );
}

export interface CrewCardList {
  title: string;
  nickname: string;
  isRecruiting: boolean;
}

export default CrewCardList;

const CrewCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type CardsProps = {
  info: CrewCardList;
};

const Cards: React.FC<CardsProps> = ({ info }) => (
  <StyledCards>
    <p>{info.title}</p>
    <p>{info.nickname}</p>
    <p>{info.isRecruiting.toString()}</p>
  </StyledCards>
);

const StyledCards = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid #c4c4c4;
  border-radius: 20px;
  margin: 20px;
`;
