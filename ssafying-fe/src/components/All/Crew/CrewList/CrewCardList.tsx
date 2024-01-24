import styled from "styled-components";
import React from "react";

import isRecruiting from "../../../../assets/img/imgBtn/isRecruiting.svg";
import isNotRecruiting from "../../../../assets/img/imgBtn/isNotRecruiting.svg";

function CrewCardList() {
  const [cardInfo, setCardInfo] = React.useState<CrewCardList[]>([
    { title: "대전캠 스터디 구해요", nickname: "su00", isRecruiting: true },
    {
      title: "프론트 스터디 같이하실분",
      nickname: "yes.hs",
      isRecruiting: false,
    },
    { title: "cs 스터디 구해요", nickname: "yes.hs", isRecruiting: true },
    { title: "알고리즘 스터디 구해요", nickname: "yes.hs", isRecruiting: true },
    { title: "자바 스터디 구해요", nickname: "yes.hs", isRecruiting: true },
  ]);

  type CardsProps = {
    info: CrewCardList;
  };

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
