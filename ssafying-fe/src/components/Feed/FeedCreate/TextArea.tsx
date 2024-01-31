import React from "react";
import styled from "styled-components";

function TextArea() {
  return (
    <TextWrapper>
      <TextInput />
    </TextWrapper>
  );
}

export default TextArea;

const TextWrapper = styled.div`
  margin: 10px auto;

  textarea:focus {
    outline: none;
  }
`;

const TextInput = styled.textarea`
  resize: none;
  border-radius: 10px;
  min-width: 350px;
  min-height: 200px;
  padding: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
`;
