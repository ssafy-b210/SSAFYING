import styled from "styled-components";
import React from "react";

import isRecruiting from "../../../../assets/img/imgBtn/isRecruiting.svg";
import isNotRecruiting from "../../../../assets/img/imgBtn/isNotRecruiting.svg";

interface CrewCardList {
  title: string;
  nickname: string;
  isRecruiting: boolean;
}

interface CardsProps {
  info: CrewCardList;
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
      {info.isRecruiting ? (
        <img className="isRecruiting" src={isRecruiting} alt="Recruiting" />
      ) : (
        <img
          className="isRecruiting"
          src={isNotRecruiting}
          alt="Not Recruiting"
        />
      )}
    </div>
  </StyledCards>
);

const Back: React.FC<BackProps> = ({ description }) => (
  <div className="back">
    <h4>{description}</h4>
  </div>
);

function CrewCardList() {
  const [cardInfo, setCardInfo] = React.useState<CrewCardList[]>([
    { title: "대전캠 스터디 구해요", nickname: "su00", isRecruiting: true },
  ]);

  return (
    <CrewCardContainer>
      {cardInfo.map((info, idx) => (
        <React.Fragment key={idx}>
          <Cards info={info} />
          <Back description="봉명동 하이테이블에서 매일 기상 스터디 할 사람구함용" />
        </React.Fragment>
      ))}
    </CrewCardContainer>
  );
}

export default CrewCardList;

const CrewCardContainer = styled.div`
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
