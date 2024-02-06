import React, { useState } from "react";
import styled from "styled-components";
import SelectCategory, {
  Option,
} from "../../../components/All/Board/BoardCreate/SelectCategory";
import MarketPriceInput from "./MarketPriceInput";
import CreateTitle from "../../All/Board/BoardCreate/CreateTitle";
import CreateContent from "../../All/Board/BoardCreate/CreateContent";

const bigcategory: Option[] = [
  { value: "SELL", label: "팝니다" },
  { value: "BUY", label: "삽니다" },
  { value: "SHARE", label: "나눔합니다" },
];

const isSold: Option[] = [
  { value: "판매중", label: "판매중" },
  { value: "판매완료", label: "판매완료" },
];

function MarketCreateModal() {
  const [selectedCategory, setSelectedCategory] = useState<Option>(
    bigcategory[0]
  );
  const [selectedIsSold, setSelectedIsSold] = useState<Option>(isSold[0]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCategoryChange = (newCategory: Option) => {
    // setSelectedCategory(newCategory);
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
          category="대분류"
          options={bigcategory}
          defaultValue="1"
          onCategoryChange={handleCategoryChange}
        ></SelectCategory>
        <SelectCategory
          category="거래여부"
          options={isSold}
          defaultValue="1"
          onCategoryChange={handleCategoryChange}
        ></SelectCategory>
        <MarketPriceInput></MarketPriceInput>
        <CreateTitle onTitleChange={handleTitleChange}></CreateTitle>
        <CreateContent onContentChange={handleContentChange}></CreateContent>
        <button>작성</button>
      </ButtonWrapper>
    </ModalWrapper>
  );
}

export default MarketCreateModal;

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
