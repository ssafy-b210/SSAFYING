import { useState, useEffect } from "react";
import styled from "styled-components";
import { getRecruitList } from "../../../apis/api/Recruit";
import FlipCardList from "./FlipCardList";

function RecruitSortTab() {
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const [recruitCode, setRecruitCode] = useState<string>("87");
  const [recruitList, setRecruitList] = useState<any[]>([]);

  useEffect(() => {
    handleList();
  }, [recruitCode]);

  const handleButtonClick = async (index: number, code: string) => {
    setActiveButton(index);
    setRecruitCode(code);
  };

  const handleList = async () => {
    const list = await getRecruitList(recruitCode);
    setRecruitList(list);
  };

  return (
    <>
      <StyledTab>
        {tabButtons.map((item, index) => (
          <SortTabButton
            key={index}
            $active={index === activeButton}
            onClick={() => handleButtonClick(index, item.code)}
          >
            <span>{item.name}</span>
          </SortTabButton>
        ))}
      </StyledTab>
      {recruitList.length > 0 && <FlipCardList recruitList={recruitList} />}
    </>
  );
}

export default RecruitSortTab;

const tabButtons = [
  { name: "웹개발", code: "87" },
  { name: "앱개발", code: "86" },
  { name: "프론트엔드", code: "92" },
  { name: "백엔드", code: "84" },
  { name: "임베디드", code: "128" },
  { name: "빅데이터", code: "116" },
  { name: "인프라", code: "127" },
  { name: "클라우드", code: "136" },
  { name: "AI", code: "181" },
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
