import styled from "styled-components";

function MarketSortTab() {
  return (
    <StyledTab>
      <SortTabButton className="active">
        <span>팝니다</span>
      </SortTabButton>
      <SortTabButton>
        <span>삽니다</span>
      </SortTabButton>
      <SortTabButton>
        <span>나눔합니다</span>
      </SortTabButton>
    </StyledTab>
  );
}

export default MarketSortTab;

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
