import styled from "styled-components";

function CrewSortTab() {
  return (
    <StyledTab>
      <div></div>
      <SortTabButton href="!#" className="active">
        <span>스터디</span>
      </SortTabButton>
      <SortTabButton href="!#">
        <span>프로젝트</span>
      </SortTabButton>
      <SortTabButton href="!#">
        <span>모임</span>
      </SortTabButton>
      <SortTabButton href="!#">
        <span>챌린지</span>
      </SortTabButton>
    </StyledTab>
  );
}

export default CrewSortTab;

const StyledTab = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const SortTabButton = styled.a`
  display: inline-block;
  margin: 0 16px;
  padding: 10px 16px;
  border-radius: 30px;
  text-decoration: none;
  background-color: #fff;
  color: #262626;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  &.active {
    background-color: #616161;
    color: #fff;
  }
`;
