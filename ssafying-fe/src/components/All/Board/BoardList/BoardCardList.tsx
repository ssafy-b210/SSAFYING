import styled from "styled-components";
import React from "react";

interface BoardCardList {
  title: string;
  nickname: string;
}

interface CardsProps {
  info: BoardCardList;
}

interface BackProps {
  description: string;
}

const Cards: React.FC<CardsProps> = ({ info }) => (
  <StyledCards>
    <h2 className="title">{info.title}</h2>
    <hr></hr>
    <div className="small-container">
      <p className="nickname">{info.nickname}</p>
    </div>
  </StyledCards>
);

const Back: React.FC<BackProps> = ({ description }) => (
  <div className="back">
    <h4>{description}</h4>
  </div>
);

function BoardCardList() {
  const [cardInfo, setCardInfo] = React.useState<BoardCardList[]>([
    { title: "유온역 맛집 추천받아요", nickname: "su00" },
  ]);

  return (
    <BoardCardContainer className="flip-inner">
      {cardInfo.map((info, idx) => (
        <React.Fragment key={idx}>
          <Cards info={info} />
          <Back description="대전캠퍼스 봉명동 맛집 제발요..." />
        </React.Fragment>
      ))}
    </BoardCardContainer>
  );
}

export default BoardCardList;

const BoardCardContainer = styled.div`
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
