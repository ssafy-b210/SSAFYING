import styled from "styled-components";
import plus from "../../../assets/img/Btn/PlusBtn.svg";

function PlusBtn() {
  return (
    <PlusBtnContainer>
      <div className="plus-btn">
        <img src={plus} alt="plus Icon"></img>
      </div>
    </PlusBtnContainer>
  );
}
export default PlusBtn;

const PlusBtnContainer = styled.div`
  position: sticky;
  bottom: 70px;
  float: right;
  margin-right: 5px;
  .plus-btn {
    border: none;
    border-radius: 50%;
    background: #d9d9d9;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
  }
  img {
    margin: 10px;
  }
`;
