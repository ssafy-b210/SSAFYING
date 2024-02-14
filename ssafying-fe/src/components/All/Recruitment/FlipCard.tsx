import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgBtn from "../../Feed/utils/ImgBtn";
import saveBtnBlack from "../../../assets/img/imgBtn/saveBtnBlack.svg";
import saveBtnWhite from "../../../assets/img/imgBtn/saveBtnWhite.svg";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { cancelscrapRecruit, scrapRecruit } from "../../../apis/api/Recruit";

interface cardProps {
  title: string;
  company: string;
  url: string;
  index: number;
  arrIdx: number;
}

function FlipCard({ title, company, url, index, arrIdx }: cardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const savedStatus = localStorage.getItem("savedStatus");
    setIsSaved(savedStatus === "true");
  }, []);

  const toggleSaved = () => {
    const newSavedStatus = !isSaved;
    setIsSaved(newSavedStatus);
    localStorage.setItem(`savedStatus_${index}`, String(newSavedStatus));
    if (!newSavedStatus) {
      scrapRecruit(user.userId, index);
    } else {
      cancelscrapRecruit(user.userId, index);
    }
  };

  return (
    <Card key={index}>
      <Wrapper>
        <Front>
          <Title>{title}</Title>
          <hr />
          <Company>{company}</Company>
        </Front>
        <Back>
          <a href={url} target="_blank">
            공고보기
          </a>
          <ImgBtn
            src={isSaved ? saveBtnBlack : saveBtnWhite}
            size="30px"
            onClick={toggleSaved}
          />
        </Back>
      </Wrapper>
    </Card>
  );
}

export default FlipCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s;
  transform-style: preserve-3d;
  border: 3px solid gray;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;
const Card = styled.div`
  width: 220px;
  height: 220px;
  margin: 17px;
  perspective: 1100px;
  &:hover ${Wrapper} {
    transform: rotateY(180deg);
  }
`;
const Front = styled.div`
  width: 90%;
  height: 90%;
  position: absolute;
  backface-visibility: hidden;
  color: black;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;

  hr {
    width: 80%;
  }
`;
const Back = styled.div`
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
  text-decoration-line: none;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Company = styled.div``;
