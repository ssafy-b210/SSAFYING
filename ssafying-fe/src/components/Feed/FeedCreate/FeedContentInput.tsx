import React from "react";
import styled from "styled-components";
import TextArea from "./TextArea";

function FeedContentInput() {
  return (
    <InputWrapper>
      <TextWrapper>
        <TextArea />
      </TextWrapper>

      <button>작성</button>
    </InputWrapper>
  );
}

export default FeedContentInput;

const InputWrapper = styled.div`
  width: 100%;
  background-color: lightgray;
  border-radius: 20px;
`;

const TextWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
