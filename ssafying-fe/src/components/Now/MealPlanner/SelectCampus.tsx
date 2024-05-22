import styled from "styled-components";

function SelectCampus() {
  return (
    <DropdownContainer>
      <span>캠퍼스를 선택해주세요</span>
      <CampusDropdown>
        <Options>대전</Options>
        <Options>서울</Options>
        <Options>부울경</Options>
        <Options>광주</Options>
        <Options>구미</Options>
      </CampusDropdown>
    </DropdownContainer>
  );
}

export default SelectCampus;
const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const CampusDropdown = styled.select`
  width: 200px;
  height: 30px;
  margin: 10px 0;
  border-radius: 20px;
`;

const Options = styled.option``;
