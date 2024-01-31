import React, { useEffect, useState } from "react";
import Tesseract from "tesseract.js";
import styled from "styled-components";

const ImageRecognition: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const recognizeImage = async () => {
      const imageUrl =
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbo49uE%2FbtrmTPxkS2Y%2FHhQFnyFUDbWVdWNKVFE3IK%2Fimg.png";

      try {
        const {
          data: { text },
        } = await Tesseract.recognize(imageUrl, "eng+kor", {
          logger: (info) => console.log(info),
        });

        setResult(text);
      } catch (error) {
        console.error(error);
      }
    };

    recognizeImage();
  }, []);

  return (
    <div>
      <Title>식단표 사진을 올려주세요</Title>
      {result !== null ? <p>결과: {result}</p> : <p>로딩 중...</p>}
      <BtnContainer>
        <CreateBtn>식단표 추가하기</CreateBtn>
      </BtnContainer>
    </div>
  );
};

export default ImageRecognition;

const Title = styled.h3`
  display: flex;
  justify-content: center;
`;
const CreateBtn = styled.button`
  border-radius: 20px;
  padding: 5px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
