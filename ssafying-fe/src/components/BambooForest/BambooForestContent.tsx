import styled from "styled-components";
import BambooForestList from "./BambooForestList";
import BambooItemModal from "./BambooItemModal";
import BambooWriteModal from "./BambooWriteModal";

function BambooForestContent() {
  return (
    <div>
      <BambooForestList />
      <ButtonWrapper>
        <BambooItemModal btnTxt="대나무숲에 소리치기">
          <BambooWriteModal />
        </BambooItemModal>
      </ButtonWrapper>
    </div>
  );
}

export default BambooForestContent;

const ButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding: 10px 20px;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
`;
