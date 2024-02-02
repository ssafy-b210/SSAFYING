import styled from "styled-components";
import React from "react";

import isRecruiting from "../../../../assets/img/imgBtn/isRecruiting.svg";
import isNotRecruiting from "../../../../assets/img/imgBtn/isNotRecruiting.svg";

interface CrewCardList {
  title: string;
  nickname: string;
  isRecruiting: boolean;
  description: string;
}

interface CardsProps {
  info: CrewCardList;
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
            <p>{info.nickname}</p>
            {info.isRecruiting ? (
              <img src={isRecruiting} alt="isRecruiting" />
            ) : (
              <img src={isNotRecruiting} alt="isNotRecruiting" />
            )}
          </SmallContainer>
        </FrontSide>
        <BackSide isFlipped={isFlipped}>
          <h4>{info.description}</h4>
        </BackSide>
      </CardContainer>
    </StyledCards>
  );
};

function CrewCardList() {
  const [cardInfo, setCardInfo] = React.useState<CrewCardList[]>([
    {
      title: "대전캠 스터디 구해요",
      nickname: "su00",
      isRecruiting: true,
      description: "누구누구?",
    },
    {
      title: "서울캠 스터디 구해요",
      nickname: "sooming",
      isRecruiting: false,
      description: "TESTSSTSJDFHAJFHDSJKFASJDFHSJKDFHJFHAJK",
    },
  ]);

  return (
    <CrewCardContainer>
      {cardInfo.map((info, idx) => (
        <Cards key={idx} info={info} />
      ))}
    </CrewCardContainer>
  );
}

export default CrewCardList;

const CrewCardContainer = styled.div`
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
