import styled from "styled-components";

function SearchBar() {
  return (
    <LocationContainer>
      <DropdownContent>
        <Option selected>지역</Option>
        <Option value="전국">전국</Option>
        <Option value="서울">서울</Option>
        <Option value="경기">경기</Option>
        <Option value="인천">인천</Option>
        <Option value="부산">부산</Option>
        <Option value="광주">광주</Option>
        <Option value="대전">대전</Option>
        <Option value="대구">대구</Option>
        <Option value="울산">울산</Option>
        <Option value="강원">강원</Option>
        <Option value="경상">경상</Option>
        <Option value="전라">전라</Option>
        <Option value="충청">충청</Option>
        <Option value="제주">제주</Option>
      </DropdownContent>
      <SearchBox type="text" placeholder="검색어를 입력해주세요"></SearchBox>
      <InputContainer>
        <input type="checkbox" />
        모집중만 검색
      </InputContainer>
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

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
