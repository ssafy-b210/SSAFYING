import React from "react";
import styled from "styled-components";
import CreateTitle from "../BoardCreate/CreateTitle";
import CreateContent from "../BoardCreate/CreateContent";
import SelectCategory, { Option } from "../../Board/BoardCreate/SelectCategory";
import IsAnonymous from "../BoardCreate/CheckAnonymous";

const options: Option[] = [
  { value: "1", label: "자유" },
  { value: "2", label: "취업" },
  { value: "3", label: "정보" },
  { value: "4", label: "개발" },
  { value: "5", label: "싸피꿀팁" },
  { value: "6", label: "생활" },
  { value: "7", label: "홍보" },
];

function BoardCreateModal() {
  return (
    <ModalWrapper>
      <ButtonWrapper>
        <SelectCategory
          category="카테고리"
          options={options}
          defaultValue="1"
        ></SelectCategory>
        <IsAnonymous></IsAnonymous>
        <CreateTitle></CreateTitle>
        <CreateContent></CreateContent>
        <button>작성</button>
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
