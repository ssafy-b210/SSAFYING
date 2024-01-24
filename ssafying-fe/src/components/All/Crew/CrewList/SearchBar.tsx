import styled from "styled-components";

function SearchBar() {
  return (
    <LocationContainer>
      <DropdownContent>
        <Option selected>지역</Option>
        <Option>전국</Option>
        <Option>서울</Option>
        <Option>경기</Option>
        <Option>인천</Option>
        <Option>부산</Option>
        <Option>광주</Option>
        <Option>대전</Option>
        <Option>대구</Option>
        <Option>울산</Option>
        <Option>세종</Option>
        <Option>강원</Option>
        <Option>경남</Option>
        <Option>경북</Option>
        <Option>전남</Option>
        <Option>전북</Option>
        <Option>충남</Option>
        <Option>충북</Option>
        <Option>제주</Option>
      </DropdownContent>
      <SearchBox value="검색어를 입력해주세요"></SearchBox>
    </LocationContainer>
  );
}

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
