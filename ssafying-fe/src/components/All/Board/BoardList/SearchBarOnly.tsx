import styled from "styled-components";

function SearchBarOnly() {
  return (
    <SearchBarContainer>
      <SearchBar type="text" placeholder="검색어를 입력하세요"></SearchBar>
      <SearchBtn>검색하기</SearchBtn>
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
