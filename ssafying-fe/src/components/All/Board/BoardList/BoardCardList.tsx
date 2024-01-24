import styled from "styled-components";
import React from "react";

function BoardCardList() {
  const [cardInfo, setCardInfo] = React.useState<BoardCardList[]>([
    { title: "유온역 맛집 추천받아요", nickname: "su00" },
    { title: "우리집 후추 보고가세요", nickname: "su00" },
  ]);

  type CardsProps = {
    info: BoardCardList;
  };

  const Cards: React.FC<CardsProps> = ({ info }) => (
    <StyledCards>
      <h2 className="title">{info.title}</h2>
      <hr></hr>
      <div className="small-container">
        <p className="nickname">{info.nickname}</p>
      </div>
    </StyledCards>
  );

  return (
    <BoardCardContainer>
      {cardInfo.map((info, idx) => (
        <Cards info={info} key={idx} />
      ))}
    </BoardCardContainer>
  );
}

export interface BoardCardList {
  title: string;
  nickname: string;
}

export default BoardCardList;

const BoardCardContainer = styled.div`
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
