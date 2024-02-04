import React, { useState } from "react";
import styled from "styled-components";

interface BoardSortTabProps {
  onCategoryChange: (category: string) => void;
}

const tabButtons = ["자유", "취업", "정보", "개발", "싸피꿀팁", "생활", "홍보"];

const BoardSortTab: React.FC<BoardSortTabProps> = ({ onCategoryChange }) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    const selectedCategory = tabButtons[index];
    onCategoryChange(selectedCategory);
  };

  return (
    <StyledTab>
      {tabButtons.map((label, index) => (
        <SortTabButton
          key={index}
          $active={index === activeButton}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </SortTabButton>
      ))}
    </StyledTab>
  );
};

export default BoardSortTab;

const SortTabButton = styled.a<{ $active: boolean }>`
  display: inline-block;
  margin: 0 16px;
  padding: 10px 16px;
  border-radius: 30px;
  text-decoration: none;
  background-color: ${({ $active }) => ($active ? "#616161" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#262626")};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

const StyledTab = styled.div`
  display: flex;
  margin: 16px 0;
  padding: 20px;
  overflow-x: auto;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  > ${SortTabButton} {
    white-space: nowrap;
  }
`;
