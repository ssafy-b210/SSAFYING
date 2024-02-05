import React, { useState } from "react";
import styled from "styled-components";
import CreateTitle from "../BoardCreate/CreateTitle";
import CreateContent from "../BoardCreate/CreateContent";
import SelectCategory, { Option } from "../../Board/BoardCreate/SelectCategory";
import IsAnonymous from "../BoardCreate/CheckAnonymous";
import { createBoard } from "../../../../apis/api/Board";

const options: Option[] = [
  { value: "자유", label: "자유" },
  { value: "취업", label: "취업" },
  { value: "정보", label: "정보" },
  { value: "개발", label: "개발" },
  { value: "싸피꿀팁", label: "싸피꿀팁" },
  { value: "생활", label: "생활" },
  { value: "홍보", label: "홍보" },
];

function BoardCreateModal() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [nickname, setNickname] = useState(false); //nickname - false: 실명제
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleNicknameChange = (newNickname: boolean) => {
    setNickname(newNickname);
  };

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleCreateBoard = () => {
    createBoard(1, title, content, selectedCategory, nickname);
  };

  return (
    <ModalWrapper>
      <ButtonWrapper>
        <SelectCategory
          category="카테고리"
          options={options}
          defaultValue="자유"
          onCategoryChange={handleCategoryChange}
        ></SelectCategory>
        <IsAnonymous onNicknameChange={handleNicknameChange}></IsAnonymous>
        <CreateTitle onTitleChange={handleTitleChange}></CreateTitle>
        <CreateContent onContentChange={handleContentChange}></CreateContent>
        <button onClick={handleCreateBoard}>작성</button>
      </ButtonWrapper>
    </ModalWrapper>
  );
}

export default BoardCreateModal;

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
