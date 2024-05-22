import exitIcon from "../../assets/img/imgBtn/exit.svg";
import styled from "styled-components";

function ExitBtn(props: { onClick?: () => void }) {
  return (
    <Button onClick={props.onClick}>
      <img src={exitIcon} alt="나기기" />
    </Button>
  );
}

export default ExitBtn;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
