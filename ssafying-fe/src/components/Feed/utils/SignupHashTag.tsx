import React, { useState } from "react";
import styled from "styled-components";

interface HashtagProps {
  text: string;
}

function Hashtag({ text }: HashtagProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelection = () => {
    setIsSelected((prevIsSelected) => !prevIsSelected);
  };

  return (
    <StyledHashTagButton
      isSelected={isSelected}
      onClick={handleToggleSelection}
    >
      <a href="#!">#{text}</a>
    </StyledHashTagButton>
  );
}

const StyledHashTagButton = styled.span<{ isSelected: boolean }>`
  a {
    display: inline-block;
    padding: 3px 7px 4px;
    background-color: ${(props) => (props.isSelected ? "#ffa6c9" : "#fff")};
    border-radius: 30px;
    border: 1px solid #ffa6c9;
    box-sizing: border-box;
    color: ${(props) => (props.isSelected ? "white" : "black")};
    text-decoration: none;
    margin: 10px 5px 5px 0;
    font-size: 12px;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for color change */
  }

  a:hover {
    background-color: #ffa6c9;
  }
`;

export default Hashtag;
