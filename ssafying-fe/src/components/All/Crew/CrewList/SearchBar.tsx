import styled from "styled-components";
import React, { useState } from "react";

interface SearchBarProps {
  onLocationChange: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onLocationChange }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSelectedLocation = event.target.value;
    setSelectedLocation(newSelectedLocation);
    onLocationChange(newSelectedLocation);
    console.log(newSelectedLocation);
  };

  return (
    <LocationContainer>
      <DropdownContent onChange={handleLocationChange} defaultValue="">
        <Option value="">지역</Option>
        <Option value="ALL">전국</Option>
        <Option value="SEOUL">서울</Option>
        <Option value="GYEONGGI">경기</Option>
        <Option value="INCHEON">인천</Option>
        <Option value="BUSAN">부산</Option>
        <Option value="GWANGJU">광주</Option>
        <Option value="DAEJEON">대전</Option>
        <Option value="DAEGU">대구</Option>
        <Option value="ULSAN">울산</Option>
        <Option value="GANGWON">강원</Option>
        <Option value="GYEONGSANG">경상</Option>
        <Option value="JEOLLA">전라</Option>
        <Option value="CHUNGCHEONG">충청</Option>
        <Option value="JEJU">제주</Option>
      </DropdownContent>
      <SearchBox type="text" placeholder="검색어를 입력해주세요"></SearchBox>
    </LocationContainer>
  );
};

export default SearchBar;

const LocationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const DropdownContent = styled.select`
  width: 150px;
  border: 2px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 12px 13px;
  line-height: 16px;
  text-align: center;
`;
const Option = styled.option``;

const SearchBox = styled.input`
  width: 230px;
  border: 2px solid #c4c4c4;
  border-radius: 20px;
  text-align: center;
`;
