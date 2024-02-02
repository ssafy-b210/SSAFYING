import styled from "styled-components";
import React from "react";

import isSelling from "../../../assets/img/imgBtn/isSelling.svg";
import isNotSelling from "../../../assets/img/imgBtn/isNotSelling.svg";

interface MarketCardList {
  title: string;
  price: number;
  isSelling: boolean;
  description: string;
  username: string;
}

interface CardsProps {
  info: MarketCardList;
}

const Cards: React.FC<CardsProps> = ({ info }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <StyledCards>
      <CardContainer
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <FrontSide isFlipped={isFlipped}>
          <StyledCardsTitle>{info.title}</StyledCardsTitle>
          <hr />
          <SmallContainer>
            <p>{info.price}원</p>
            {info.isSelling ? (
              <img src={isSelling} alt="isSelling" />
            ) : (
              <img src={isNotSelling} alt="isNotSelling" />
            )}
          </SmallContainer>
        </FrontSide>
        <BackSide isFlipped={isFlipped}>
          <h4>{info.description}</h4>
          <p>{info.username}</p>
        </BackSide>
      </CardContainer>
    </StyledCards>
  );
};

function MarketCardList() {
  const [cardInfo, setCardInfo] = React.useState<MarketCardList[]>([
    {
      title: "내 한무무 키보드 팔아요",
      price: 25000,
      isSelling: true,
      description: "우와 되나?",
      username: "되나",
    },
    {
      title: "다른 카드",
      price: 30000,
      isSelling: false,
      description: "우와 되나?",
      username: "되나",
    },
  ]);

  return (
    <MarketCardContainer>
      {cardInfo.map((info, idx) => (
        <Cards key={idx} info={info} />
      ))}
    </MarketCardContainer>
  );
}

export default MarketCardList;

const MarketCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

//card
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s;
  // perspective-origin: center;
  transform-style: preserve-3d;
  border: 3px solid gray;
  border-radius: 20px;
`;

//wrapper
const StyledCards = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  perspective: 1100px;
  &:hover ${CardContainer} {
    transform: rotateY(180deg);
  }
`;

const FrontSide = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const BackSide = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledCardsTitle = styled.h2`
  text-align: left;
  margin-left: 15px;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
