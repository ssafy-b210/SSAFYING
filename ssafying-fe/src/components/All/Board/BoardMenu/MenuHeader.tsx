import styled from "styled-components";

interface MenuHeaderProps {
  header: string;
}
function MenuHeader(props: MenuHeaderProps) {
  const header = props.header;
  return (
    <MenuHeaderWrapper>
      <header>{header}</header>
    </MenuHeaderWrapper>
  );
}

export default MenuHeader;

const MenuHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
  font-weight: bold;
`;
