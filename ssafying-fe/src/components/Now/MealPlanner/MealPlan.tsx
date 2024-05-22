import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ImageRecognition from "./ImgToText";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { createMeal, selectMealList } from "../../../apis/api/Meal";

interface MealPlanProps {
  onVote: () => void;
  voteCount: number;
}
const MealPlan: React.FC<MealPlanProps> = ({ onVote, voteCount = 0 }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [mealPlanResult, setMealPlanResult] = useState<string[]>([]);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const savedMealPlanResult = localStorage.getItem("mealPlanResult");
    if (savedMealPlanResult) {
      setMealPlanResult(JSON.parse(savedMealPlanResult));
    }
  }, []);

  // 변경된 mealPlanResult를 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("mealPlanResult", JSON.stringify(mealPlanResult));
  }, [mealPlanResult]);

  useEffect(() => {
    async function fetchMealList() {
      try {
        const meals = await selectMealList(user.userId);
        console.log("meals", meals);
        setMealPlanResult(meals);
      } catch (error) {
        console.error(error);
      }
    }

    if (mealPlanResult.length === 0) {
      fetchMealList();
    }
  }, [user.campus, mealPlanResult.length]);

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

  // 고유한 id 생성
  const inputId = `chooseFile_${Math.random().toString(36).substr(2, 9)}`;

  const saveMealPlanResult = async () => {
    try {
      for (const result of mealPlanResult) {
        await createMeal(user.campus, result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(mealPlanResult);
  return (
    <div>
      <MealPlanContainer>
        {/* 여기에  식단내용이 들어감 */}
        {mealPlanResult.length > 0 && (
          <ResultContainer>
            {mealPlanResult.map((line, index) => (
              <StyledParagraph key={index}>{line}</StyledParagraph>
            ))}
          </ResultContainer>
        )}
      </MealPlanContainer>
      <IsLikeContainer>
        <button onClick={onVote}>투표하기</button>
        <label
          className="file-label"
          htmlFor={inputId}
          onClick={saveMealPlanResult}
        >
          추가하기
        </label>
        <input
          className="file"
          id={inputId}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        ></input>
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
  width: 170px;
  height: 250px;
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 5px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;
const IsLikeContainer = styled.div`
  display: flex;
  justify-content: center;

  button,
  .file-label {
    border: none;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    color: white;
    padding: 10px;
    font-size: 12px;
    font-weight: 600;
    margin: 7px;
  }

  button: hover,
  .file-label: hover {
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .file {
    display: none;
  }
`;

const StyledParagraph = styled.p`
  margin: 5px 0;
`;
