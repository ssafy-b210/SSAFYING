import styled from "styled-components";

function SearchBarOnly() {
  return (
    <SearchBarContainer>
      <SearchBar type="text" placeholder="검색어를 입력하세요"></SearchBar>
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
  border: 2px solid #c4c4c4;
  border-radius: 20px;
  text-align: center;
`;
