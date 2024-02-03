import React, { useState } from "react";
import styled from "styled-components";

function ToggleBtn() {
  const [isRecruiting, setIsRecruiting] = useState<boolean>(false);

  const handleToggle = () => {
    setIsRecruiting(!isRecruiting);
  };

  return (
    <ToggleContainer>
      <h4>모집여부</h4>
      <Toggle>
        <input
          role="switch"
          type="checkbox"
          checked={isRecruiting}
          onChange={handleToggle}
        />
        <span>{isRecruiting ? "모집완료 되었습니다." : "모집중입니다."}</span>
      </Toggle>
    </ToggleContainer>
  );
}

export default ToggleBtn;

const ToggleContainer = styled.div`
  h4 {
    margin-left: 20px;
  }
  display: flex;
`;

const Toggle = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  input {
    appearance: none;
    position: relative;
    border: max(2px, 0.1em) solid gray;
    border-radius: 15px;
    width: 30px;
    height: 16px;
    margin-left: 20px;
  }

  input::before {
    content: "";
    position: absolute;
    left: 0;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: gray;
    transition: left 250ms linear;
  }

  input:checked {
    background-color: green;
    border-color: green;
  }

  input:checked::before {
    background-color: white;
    left: 15px;
  }
`;
