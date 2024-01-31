import React, { useState } from "react";
import styled from "styled-components";

//Props 나중에 추가
interface CrewSortTabProps {}

function CrewSortTab({}: CrewSortTabProps) {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <StyledTab>
      {tabButtons.map((label, index) => (
        <SortTabButton
          key={index}
          $active={index === activeButton}
          onClick={() => handleButtonClick(index)}
        >
          <span>{label}</span>
        </SortTabButton>
      ))}
    </StyledTab>
  );
}

export default CrewSortTab;

const tabButtons = [
  "스터디",
  "공모전/프로젝트",
  "모임",
  "챌린지",
  "동창회/동호회",
  "액티비티",
  "번개 회식",
  "기타",
];

interface SortTabButtonProps {
  $active: boolean;
}

const SortTabButton = styled.a<SortTabButtonProps>`
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
