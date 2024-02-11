import React, { useState } from "react";
import TextArea from "../Feed/FeedCreate/TextArea";
import styled from "styled-components";

function BambooWriteModal() {
  const [content, setContent] = useState(""); // TextArea의 내용을 저장할 상태

  return (
    <ModalWrapper>
      <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
      <ButtonWrapper>
        <button>작성</button>
      </ButtonWrapper>
    </ModalWrapper>
  );
}

export default BambooWriteModal;

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
