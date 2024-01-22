import styled from "styled-components";
import plus from "../../../assets/img/Btn/PlusBtn.svg";

function PlusBtn() {
  return (
    <div>
      <PlusBtnContainer>
        <div className="img-container">
          <img src={plus} alt="plus Icon"></img>
        </div>
      </PlusBtnContainer>
    </div>
  );
}
export default PlusBtn;

const PlusBtnContainer = styled.div`
  .img-container {
    border: 1px solid black;
    border-radius: 40px;
    background: #d9d9d9;
    width: 30px;
    display: flex;
    justify-content: center;
  }
  img {
    margin: 2px;
  }
`;
