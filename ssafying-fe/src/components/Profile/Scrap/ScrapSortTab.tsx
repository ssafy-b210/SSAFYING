import styled from "styled-components";

function ScrapSortTap() {
  return (
    <StyledScrapTab>
      <div></div>
      <SortTabButton href="!#" className="active">
        <span>게시물</span>
      </SortTabButton>
      <SortTabButton href="!#">
        <span>게시판</span>
      </SortTabButton>
      <SortTabButton href="!#">
        <span>취업공고</span>
      </SortTabButton>
    </StyledScrapTab>
  );
}

const StyledScrapTab = styled.div`
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

export default ScrapSortTap;
