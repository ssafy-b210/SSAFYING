import { Link } from "react-router-dom";
import styled from "styled-components";

interface BoardBtnProps {
  btnmsg: string;
  link: string;
  onClick?: () => void;
}

function BoardBtn(props: BoardBtnProps) {
  const btnmsg = props.btnmsg;
  return (
    <ButtonContainer>
      <Link to={props.link}>
        <Button onClick={props.onClick}>{btnmsg}</Button>
      </Link>
    </ButtonContainer>
  );
}

export default BoardBtn;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Button = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #616161;
  color: white;
  padding: 10px;
  margin: 15px;
`;
