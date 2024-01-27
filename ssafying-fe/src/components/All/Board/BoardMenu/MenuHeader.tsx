import styled from "styled-components";

interface MenuHeaderProps {
  header: string;
}
function MenuHeader(props: MenuHeaderProps) {
  const header = props.header;
  return (
    <div>
      <Header>
        <h2>{header}</h2>
      </Header>
    </div>
  );
}

export default MenuHeader;

const Header = styled.header`
  h2 {
    margin-top: 50px;
    margin-left: 50px;
  }
`;
