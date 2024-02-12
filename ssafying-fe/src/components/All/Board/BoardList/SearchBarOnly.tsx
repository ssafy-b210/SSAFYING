import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBarOnly() {
  const navigate = useNavigate();

  const [searchWord, setSearchWord] = useState("");

  const handleSearch = () => {
    const queryString = new URLSearchParams({
      searchWord: searchWord.trim(),
    }).toString();
    navigate(`/board?${queryString}`);
  };

  return (
    <SearchBarContainer>
      <SearchBar
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      ></SearchBar>
      <SearchBtn onClick={handleSearch}>검색하기</SearchBtn>
    </SearchBarContainer>
  );
}

export default SearchBarOnly;
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SearchBar = styled.input`
  width: 230px;
  height: 25px;
  border: none;
  border-radius: 20px;
  text-align: center;
  background-color: white;
  font-family: "Noto Sans KR", "Noto Sans";
  margin-right: 20px;
`;
const SearchBtn = styled.button`
  padding: 5px;
  padding-left: 7px;
  padding-right: 7px;
  border-radius: 20px;
  border: none;
  font-family: "Noto Sans KR", "Noto Sans";
`;
