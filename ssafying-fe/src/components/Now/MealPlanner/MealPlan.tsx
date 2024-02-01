import styled from "styled-components";
import React, { useState } from "react";
import ImageRecognition from "./ImgToText";

interface MealPlanProps {
  onVote: () => void;
  voteCount: number;
}

const MealPlan: React.FC<MealPlanProps> = ({ onVote, voteCount = 0 }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [mealPlanResult, setMealPlanResult] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      //이미지 파일을 상태에 저장
      setImageFile(file);

      //파일을 읽어서 url로 변환 후 상태에 저장하자
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <MealPlanContainer>
        {/* 여기에  식단내용이 들어감 */}
        {mealPlanResult.length > 0 && (
          <ResultContainer>
            {mealPlanResult.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </ResultContainer>
        )}
      </MealPlanContainer>
      <IsLikeContainer>
        <IsLikeButton onClick={onVote}>투표하기</IsLikeButton>
        <label className="file-label" htmlFor="chooseFile">
          추가하기
        </label>
        <input
          className="file"
          id="chooseFile"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        ></input>
        {/* <VoteCountText>{voteCount}</VoteCountText> */}
        <ImageRecognition
          imageUrl={imageUrl}
          setMealPlanResult={setMealPlanResult}
        />
      </IsLikeContainer>
    </div>
  );
};

export default MealPlan;
export type { MealPlanProps };

const MealPlanContainer = styled.div`
  width: 200px;
  height: 300px;
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IsLikeContainer = styled.div`
  display: flex;
  justify-content: center;
  .file-label {
    border-radius: 20px;
    border: 1px solid gray;
    padding: 10px;
    font-size: 15px;
    transition: background-color 0.3s;

    &:hover {
      background-color: lightblue;
    }
    &:active {
      background-color: lightcoral;
    }
    margin: 5px;
  }
  .file {
    display: none;
  }
`;
const IsLikeButton = styled.button`
  border-radius: 20px;
  border: 1px solid gray;
  background-color: transparent;
  font-family: "Noto Sans KR", "Noto Sans";
  font-size: 15px;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightblue;
  }
  &:active {
    background-color: lightcoral;
  }
  margin: 5px;
`;
const VoteCountText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: gray;
`;
