import React from "react";
import styled from "styled-components";

function TextArea() {
  return (
    <TextWrapper>
      <TextInput placeholder="문구를 입력하세요" />
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
  padding: 15px;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 5px 10px;
  box-sizing: border-box;
`;
