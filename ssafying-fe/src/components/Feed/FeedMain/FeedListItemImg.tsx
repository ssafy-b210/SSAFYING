import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  imageUrls: {
    id: number;
    imageUrl: string;
  }[];
}

function FeedListItemImg({ imageUrls }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  return (
    <Wrapper>
      <ImgWrapper>
        <Img
          src={imageUrls[currentImage].imageUrl}
          alt={`User ${imageUrls[currentImage].id}`}
        />
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
