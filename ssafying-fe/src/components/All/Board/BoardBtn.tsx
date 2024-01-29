import styled from "styled-components";

// 수정하기, 삭제하기 버튼...!

interface BoardBtnProps {
  btnmsg: string;
}

function BoardBtn(props: BoardBtnProps) {
  const btnmsg = props.btnmsg;
  return (
    <ButtonContainer>
      <Button>{btnmsg}</Button>
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
