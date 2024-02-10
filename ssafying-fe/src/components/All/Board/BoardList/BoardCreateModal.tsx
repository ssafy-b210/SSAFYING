import React, { useCallback, useState } from "react";
import styled from "styled-components";
import CreateTitle from "../BoardCreate/CreateTitle";
import CreateContent from "../BoardCreate/CreateContent";
import SelectCategory, { Option } from "../../Board/BoardCreate/SelectCategory";
import IsAnonymous from "../BoardCreate/CheckAnonymous";
import { createBoard } from "../../../../apis/api/Board";

function BoardCreateModal() {
  const options: Option[] = [
    { value: "FREEDOM", label: "자유" },
    { value: "EMPLOYMENT", label: "취업" },
    { value: "INFO", label: "정보" },
    { value: "DEVELOPMENT", label: "개발" },
    { value: "TIP", label: "싸피꿀팁" },
    { value: "LIVING", label: "생활" },
    { value: "PROMOTION", label: "홍보" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Option>(options[0]);
  const [nickname, setNickname] = useState(false); //nickname - false: 실명제
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleNicknameChange = (event: any) => {
    setNickname(event.currentTarget.value);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.currentTarget.value);
  };

  const handleTitleChange = (event: any) => {
    setTitle(event.currentTarget.value);
  };

  const handleContentChange = (event: any) => {
    setContent(event.currentTarget.value);
  };

  //api 호출
  const handleCreateBoard = () => {
    createBoard(1, title, content, selectedCategory.value, nickname);
    setTitle("");
    setContent("");
    setSelectedCategory(options[0]);
    setNickname(false);
  };
  return (
    <ModalWrapper>
      <ButtonWrapper>
        <SelectCategory
          category="카테고리"
          options={options}
          defaultValue={options[0].value}
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
