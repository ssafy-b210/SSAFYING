import React, { useState } from "react";
import styled from "styled-components";
import userImg from "../../../assets/img/testImg/user6.jpg";
import userImg2 from "../../../assets/img/testImg/user7.jpg";
import userImg3 from "../../../assets/img/testImg/user8.jpg";

function FeedListItemImg() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [userImg, userImg2, userImg3];

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={images[currentImage]} alt={`User ${currentImage + 1}`} />
        <ButtonLeft onClick={handlePrev}>◀</ButtonLeft>
        <ButtonRight onClick={handleNext}>▶</ButtonRight>
      </ImgWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 95%;
`;

const Img = styled.img`
  width: 100%;
  margin: 5px auto;
  border-radius: 5px;
  height: auto;
`;

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const ButtonLeft = styled(Button)`
  left: 10px;
  top: 45%;
`;

const ButtonRight = styled(Button)`
  right: 10px;
  top: 45%;
`;

export default FeedListItemImg;
