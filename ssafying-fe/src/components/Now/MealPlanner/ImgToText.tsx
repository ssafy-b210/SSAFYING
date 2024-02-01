import React, { useEffect, useState } from "react";
import Tesseract, { LoggerMessage } from "tesseract.js";
import styled from "styled-components";

interface ImageRecognitionProps {
  imageUrl: string | null;
  setMealPlanResult: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageRecognition: React.FC<ImageRecognitionProps> = ({
  imageUrl,
  setMealPlanResult,
}) => {
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    const recognizeImage = async () => {
      if (!imageUrl) {
        return;
      }

      try {
        const options: any = {
          logger: (info: LoggerMessage) => console.log(info),
        };

        const {
          data: { text },
        } = await Tesseract.recognize(imageUrl, "eng+kor", options);

        const lines = text.split(/\n/).filter((line) => line.trim() !== "");
        setResult(lines);
        setMealPlanResult(lines);
      } catch (error) {
        console.error(error);
      }
    };

    recognizeImage();
  }, [imageUrl, setMealPlanResult]);

  return (
    <div>
      {/* <Title>식단표 사진을 올려주세요</Title> */}
      {result.length > 0 ? (
        <ResultContainer>
          {/* {result.map((line, index) => (
            <p key={index}>{line}</p>
          ))} */}
        </ResultContainer>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ImageRecognition;

const Title = styled.h3`
  display: flex;
  justify-content: center;
`;
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
