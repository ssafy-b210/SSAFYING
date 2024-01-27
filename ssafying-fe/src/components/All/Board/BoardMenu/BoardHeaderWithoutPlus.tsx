import styled from "styled-components";
import back from "../../../../assets/img/Btn/BackBtn.svg";

interface BoardHeaderProps {
  header: string;
}

function BoardHeaderWithoutPlus(props: BoardHeaderProps) {
  const header = props.header;
  return (
    <Header>
      <img src={back}></img>
      <h2>{header}</h2>
      <div></div>
    </Header>
  );
}
export default BoardHeaderWithoutPlus;

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
