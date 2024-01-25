import styled from "styled-components";
import add from "../../../assets/img/imgBtn/add.svg";

function PlusBtn() {
  return (
    <PlusBtnContainer>
      <img src={add} alt="plus Icon"></img>
    </PlusBtnContainer>
  );
}
export default PlusBtn;

const PlusBtnContainer = styled.div`
  img {
    margin: 10px;
    margin-right: 30px;
  }
  display: flex;
`;
