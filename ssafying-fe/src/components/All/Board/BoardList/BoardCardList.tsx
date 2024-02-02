import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

interface BoardCardList {
  id: number;
  title: string;
  nickname: string;
  description: string; //back
}

interface CardsProps {
  info: BoardCardList;
}

const truncate = (str: string, n: number) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

const Cards: React.FC<CardsProps> = ({ info }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <StyledCards>
      <Link to={`/board/${info.id}`}>
        <CardContainer
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          key={info.id}
        >
          <FrontSide isFlipped={isFlipped}>
            <StyledCardsTitle>{truncate(info.title, 20)}</StyledCardsTitle>
            <hr />
            <SmallContainer>
              <p>{info.nickname}</p>
            </SmallContainer>
          </FrontSide>
          <BackSide isFlipped={isFlipped}>
            <h4>{truncate(info.description, 100)}</h4>
          </BackSide>
        </CardContainer>
      </Link>
    </StyledCards>
  );
};

function BoardCardList() {
  const [cardInfo, setCardInfo] = React.useState<BoardCardList[]>([
    {
      id: 1,
      title: "유온역 맛집 추천받아요",
      nickname: "sueun",
      description:
        "숙취용 부탁해testesetsajfdklajfjaklfjsasjflkdjfakljfkslfjkfjsakfjkjfskfjsakfjskfjakjfkfjkdajfakljfakfjaksdl",
    },
    {
      id: 2,
      title: "새해복많이받을사람",
      nickname: "sooming",
      description: "아아 난가?",
    },
  ]);

  return (
    <BoardCardContainer>
      {cardInfo.map((info, idx) => (
        <Cards key={idx} info={info} />
      ))}
    </BoardCardContainer>
  );
}

export default BoardCardList;

const BoardCardContainer = styled.div`
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
  a {
    text-decoration: none;
  }
`;

const FrontSide = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;

  hr {
    width: 80%;
  }
`;

const BackSide = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;
`;

const StyledCardsTitle = styled.h2`
  text-align: left;
  margin-left: 15px;
  // width: 100%;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
