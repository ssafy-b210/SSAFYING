import styled from "styled-components";
import React from "react";

import isSelling from "../../../assets/img/imgBtn/isSelling.svg";
import isNotSelling from "../../../assets/img/imgBtn/isNotSelling.svg";

function MarketCardList() {
  const [cardInfo, setCardInfo] = React.useState<MarketCardList[]>([
    { title: "내 한무무 키보드 팔아요", price: 25000, isSelling: true },
    { title: "싸피 블랙 후드 집업 나눔해요", price: 25000, isSelling: true },
    { title: "덕명동 집 나눔해요", price: 25000, isSelling: true },
    { title: "김수은 빌려드려요", price: 25000, isSelling: true },
  ]);

  type CardsProps = {
    info: MarketCardList;
  };

  const Cards: React.FC<CardsProps> = ({ info }) => (
    <StyledCards>
      <h2 className="title">{info.title}</h2>
      <hr></hr>
      <div className="small-container">
        <p>{info.price}원</p>
        {info.isSelling ? (
          <img src={isSelling} alt="Recruiting" />
        ) : (
          <img src={isNotSelling} alt="Not Recruiting" />
        )}
      </div>
    </StyledCards>
  );

  return (
    <MarketCardContainer>
      {cardInfo.map((info, idx) => (
        <Cards info={info} key={idx} />
      ))}
    </MarketCardContainer>
  );
}

export interface MarketCardList {
  title: string;
  price: number;
  isSelling: boolean;
}

export default MarketCardList;

const MarketCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledCards = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid #c4c4c4;
  border-radius: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
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
