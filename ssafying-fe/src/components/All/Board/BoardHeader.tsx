import styled from "styled-components";

function BoardHeader() {
  return (
    <div>
      <Header>
        <h2>For All</h2>
      </Header>
    </div>
  );
}

export default BoardHeader;

const Header = styled.header`
  h2 {
    margin-top: 4em;
    margin-left: 2em;
  }
`;
