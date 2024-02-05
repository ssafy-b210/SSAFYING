import React from "react";
import styled from "styled-components";
import SelectCategory, {
  Option,
} from "../../../components/All/Board/BoardCreate/SelectCategory";
import MarketPriceInput from "./MarketPriceInput";
import CreateTitle from "../../All/Board/BoardCreate/CreateTitle";
import CreateContent from "../../All/Board/BoardCreate/CreateContent";

const bigcategory: Option[] = [
  { value: "1", label: "팝니다" },
  { value: "2", label: "삽니다" },
  { value: "3", label: "나눔합니다" },
];

const isSold: Option[] = [
  { value: "1", label: "판매중" },
  { value: "2", label: "판매완료" },
  { value: "3", label: "예약중" },
];

function MarketCreateModal() {
  return (
    <ModalWrapper>
      <ButtonWrapper>
        <SelectCategory
          category="대분류"
          options={bigcategory}
          defaultValue="1"
        ></SelectCategory>
        <SelectCategory
          category="거래여부"
          options={isSold}
          defaultValue="1"
        ></SelectCategory>
        <MarketPriceInput></MarketPriceInput>
        <CreateTitle></CreateTitle>
        <CreateContent></CreateContent>
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
