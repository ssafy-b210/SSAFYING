import styled, { keyframes } from "styled-components";
import React from "styled-components";

interface ProgressBarProps {
  width: number;
}

function ProgressBar({ width }: ProgressBarProps) {
  return (
    <div>
      <BarContainer>
        <ProgressGraph width={width} />
      </BarContainer>
    </div>
  );
}

export default ProgressBar;

const growWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${(props: ProgressBarProps) => props.width}%;
  }
`;

const BarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 10px;
`;

const ProgressGraph = styled.div<ProgressBarProps>`
  width: ${(props) => props.width}%;
  height: 100%;
  padding: 0;
  background-color: skyblue;
  border-radius: 20px;
  animation: ${growWidth} 0.5s ease-out;
`;
