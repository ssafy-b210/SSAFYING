import React from "react";
import styled from "styled-components";
import TextArea from "./TextArea";

function FeedContentInput() {
  return (
    <InputWrapper>
      <TextWrapper>
        <TextArea />
      </TextWrapper>
      <ButtonWrapper>
        <button>작성</button>
      </ButtonWrapper>
    </InputWrapper>
  );
}

export default FeedContentInput;

const InputWrapper = styled.div`
  width: 100%;
`;

const TextWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 5px 20px;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
  }
`;
