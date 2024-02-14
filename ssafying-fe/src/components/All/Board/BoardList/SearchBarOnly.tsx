import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectAllBoard } from "../../../../apis/api/Board";

interface Props {
  onSearchResult?: (resultData: any[]) => void;
}

const SearchBarOnly: React.FC<Props> = ({ onSearchResult }) => {
  const navigate = useNavigate();

  const [searchWord, setSearchWord] = useState("");

  const handleSearch = async () => {
    try {
      const data = await selectAllBoard(undefined, searchWord.trim());
      console.log(data.resultData);
      if (onSearchResult) {
        onSearchResult(data.resultData);
      }
    } catch (error) {
      console.error(error);
    }

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
};

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
