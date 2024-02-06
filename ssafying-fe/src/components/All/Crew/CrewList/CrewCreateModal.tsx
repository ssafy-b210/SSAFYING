import React, { useState } from "react";
import styled from "styled-components";
import SelectCategory, { Option } from "../../Board/BoardCreate/SelectCategory";
import ToggleBtn from "../ToggleBtn";
import CreateTitle from "../../Board/BoardCreate/CreateTitle";
import CreateContent from "../../Board/BoardCreate/CreateContent";

const category: Option[] = [
  { value: "스터디", label: "스터디" },
  { value: "챌린지", label: "챌린지" },
  { value: "동창회/동호회", label: "동창회/동호회" },
  { value: "액티비티", label: "액티비티" },
  { value: "번개 회식", label: "번개 회식" },
  { value: "공모전/프로젝트", label: "공모전/프로젝트" },
  { value: "기타", label: "기타" },
];

const location: Option[] = [
  { value: "전국", label: "전국" },
  { value: "서울", label: "서울" },
  { value: "경기", label: "경기" },
  { value: "인천", label: "인천" },
  { value: "부산", label: "부산" },
  { value: "대구", label: "대구" },
  { value: "광주", label: "광주" },
  { value: "대전", label: "대전" },
  { value: "울산", label: "울산" },
  { value: "강원", label: "강원" },
  { value: "경상", label: "경상" },
  { value: "전라", label: "전라" },
  { value: "충청", label: "충청" },
  { value: "제주", label: "제주" },
];

function CrewCreateModal() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <ModalWrapper>
      <ButtonWrapper>
        <SelectCategory
          category="지역"
          options={location}
          defaultValue="전국"
          onCategoryChange={handleCategoryChange}
        ></SelectCategory>
        <SelectCategory
          category="카테고리"
          options={category}
          defaultValue="스터디"
          onCategoryChange={handleCategoryChange}
        ></SelectCategory>
        <ToggleBtn />
        <CreateTitle onTitleChange={handleTitleChange} />
        <CreateContent onContentChange={handleContentChange} />
        <button>작성</button>
      </ButtonWrapper>
    </ModalWrapper>
  );
}
export default CrewCreateModal;
const ModalWrapper = styled.div`
  background-color: transparent;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    margin-top: 10px;
  }
`;
