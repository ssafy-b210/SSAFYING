import React from "react";
import TextArea from "../Feed/FeedCreate/TextArea";
import styled from "styled-components";

function BambooMoreModal() {
  return (
    <ModalWrapper>
      <TextArea />
      <ButtonWrapper>
        <button>작성</button>
      </ButtonWrapper>
    </ModalWrapper>
  );
}

export default BambooMoreModal;

const ModalWrapper = styled.div`
  background-color: transparent;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
  }
`;
