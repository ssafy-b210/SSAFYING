import React, { useState } from "react";
import styled from "styled-components";

interface MarketSortTabProps {
  onCategoryChange: (category: string) => void;
}

const tabButtons = ["삽니다", "팝니다", "나눔합니다"];

const MarketSortTab: React.FC<MarketSortTabProps> = ({ onCategoryChange }) => {
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

export default MarketSortTab;

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
  justify-content: center;
  margin: 16px 0;
`;
