import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

interface MarketSortTabProps {
  onCategoryChange: (category: string) => void;
}

const tabButtons: { value: string; label: string }[] = [
  { value: "BUY", label: "삽니다" },
  { value: "SELL", label: "팝니다" },
  { value: "SHARE", label: "나눔합니다" },
];

const MarketSortTab: React.FC<MarketSortTabProps> = ({ onCategoryChange }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    const selectedCategory = tabButtons[index].value;
    onCategoryChange(selectedCategory);

    //카테고리에 대한 쿼리스트링 추가
    navigate(`?marketWay=${selectedCategory}`);
  };

  return (
    <StyledTab>
      {tabButtons.map(({ label }, index) => (
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
