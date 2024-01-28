import styled from "styled-components";
import React from "react";

import isSelling from "../../../assets/img/imgBtn/isSelling.svg";
import isNotSelling from "../../../assets/img/imgBtn/isNotSelling.svg";

interface MarketCardList {
  title: string;
  price: number;
  isSelling: boolean;
}

interface CardsProps {
  info: MarketCardList;
}

interface BackProps {
  description: string;
  username: string;
}

const Cards: React.FC<CardsProps> = ({ info }) => (
  <StyledCards className="front">
    <h2 className="title">{info.title}</h2>
    <hr />
    <div className="small-container">
      <p>{info.price}원</p>
      {info.isSelling ? (
        <img src={isSelling} alt="isSelling" />
      ) : (
        <img src={isNotSelling} alt="isNotSelling" />
      )}
    </div>
  </StyledCards>
);

const Back: React.FC<BackProps> = ({ description, username }) => (
  <div className="back">
    <h4>{description}</h4>
    <p>{username}</p>
  </div>
);

function MarketCardList() {
  const [cardInfo, setCardInfo] = React.useState<MarketCardList[]>([
    { title: "내 한무무 키보드 팔아요", price: 25000, isSelling: true },
  ]);

  return (
    <MarketCardContainer className="flip-inner">
      {cardInfo.map((info, idx) => (
        <React.Fragment key={idx}>
          <Cards info={info} />
          <Back
            description="깔끔하게 썼어요. 한성컴퓨터 한무무"
            username="aeong123"
          />
        </React.Fragment>
      ))}
    </MarketCardContainer>
  );
}

export default MarketCardList;

const MarketCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
  .back {
    position: absolute;
    text-align: center;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 200px;
    border: 3px solid #c4c4c4;
    border-radius: 20px;
    backface-visibility: hidden;
    margin: 20px;
  }
`;

const StyledCards = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid #c4c4c4;
  border-radius: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  backface-visibility: hidden;
  z-index: 1;
  hr {
    width: 80%;
  }
  .title {
    text-align: left;
    margin-left: 15px;
  }
  .small-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
