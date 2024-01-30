import React from "react";
import styled from "styled-components";

function TextArea() {
  return (
    <TextWrapper>
      <textarea />
    </TextWrapper>
  );
}

export default TextArea;

const TextWrapper = styled.div`
  margin: 0 auto;
`;
