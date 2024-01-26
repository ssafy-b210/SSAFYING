import styled from "styled-components";
import back from "../../../../assets/img/Btn/BackBtn.svg";
import PlusBtn from "../PlusBtn";

interface BoardHeaderProps {
  header: string;
}

function BoardHeader(props: BoardHeaderProps) {
  const header = props.header;
  return (
    <Header>
      <img src={back}></img>
      <h2>{header}</h2>
      <PlusBtn></PlusBtn>
    </Header>
  );
}
export default BoardHeader;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    margin-left: 20px;
  }
  img {
    margin-left: 20px;
    margin-top: 5px;
  }
`;
