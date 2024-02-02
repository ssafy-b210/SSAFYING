import styled from "styled-components";
import BambooForestList from "./BambooForestList";
import Modal from "../Common/Modal";
import BambooWriteModal from "./BambooWriteModal";

function BambooForestContent() {
  return (
    <div>
      <BambooForestList />
      <ButtonWrapper>
        <Modal btnTxt="대나무숲에 소리치기">
          <BambooWriteModal />
        </Modal>
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
    border-radius: 10px;
    padding: 10px 20px;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
`;
