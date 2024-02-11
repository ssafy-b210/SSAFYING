import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

interface CrewSortTabProps {
  onCategoryChange: (category: string) => void;
}

const tabButtons: { value: string; label: string }[] = [
  { value: "STUDY", label: "스터디" },
  { value: "CHALLENGE", label: "챌린지" },
  { value: "SOCIETY", label: "동창회/동호회" },
  { value: "ACTIVITY", label: "액티비티" },
  { value: "FLASHMOB", label: "번개 회식" },
  { value: "PROJECT", label: "공모전/프로젝트" },
  { value: "ETC", label: "기타" },
];

const CrewSortTab: React.FC<CrewSortTabProps> = ({ onCategoryChange }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    const selectedCategory = tabButtons[index].value;
    onCategoryChange(selectedCategory);

    navigate(`?category=${selectedCategory}`);
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

export default CrewSortTab;

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
