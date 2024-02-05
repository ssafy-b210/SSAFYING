import React from "react";
import styled from "styled-components";
import SelectCategory, { Option } from "../../Board/BoardCreate/SelectCategory";
import ToggleBtn from "../ToggleBtn";
import CreateTitle from "../../Board/BoardCreate/CreateTitle";
import CreateContent from "../../Board/BoardCreate/CreateContent";

const category: Option[] = [
  { value: "1", label: "스터디" },
  { value: "2", label: "챌린지" },
  { value: "3", label: "동창회/동호회" },
  { value: "4", label: "액티비티" },
  { value: "5", label: "번개 회식" },
  { value: "6", label: "공모전/프로젝트" },
  { value: "7", label: "기타" },
];

const location: Option[] = [
  { value: "1", label: "전국" },
  { value: "2", label: "서울" },
  { value: "3", label: "경기" },
  { value: "4", label: "인천" },
  { value: "5", label: "부산" },
  { value: "6", label: "대구" },
  { value: "7", label: "광주" },
  { value: "8", label: "대전" },
  { value: "9", label: "울산" },
  { value: "10", label: "강원" },
  { value: "11", label: "경상" },
  { value: "12", label: "전라" },
  { value: "13", label: "충청" },
  { value: "14", label: "제주" },
];

function CrewCreateModal() {
  return (
    <ModalWrapper>
      <ButtonWrapper>
        <SelectCategory
          category="지역"
          options={location}
          defaultValue="1"
        ></SelectCategory>
        <SelectCategory
          category="카테고리"
          options={category}
          defaultValue="1"
        ></SelectCategory>
        <ToggleBtn />
        <CreateTitle />
        <CreateContent />
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
