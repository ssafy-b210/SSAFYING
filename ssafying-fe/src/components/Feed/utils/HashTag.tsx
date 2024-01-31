import React from "react";
import { styled } from "styled-components";

interface HashtagProps {
  text: string;
}

function Hashtag({ text }: HashtagProps) {
  return (
    <StyledHashTagButton>
      <a href="#!">#{text}</a>
    </StyledHashTagButton>
  );
}

const StyledHashTagButton = styled.span`
  a {
    display: inline-block;
    padding: 3px 7px 4px;
    background-color: #fff;
    border-radius: 30px;
    border: 1px solid #b6cdbd;
    box-sizing: border-box;
    color: black;
    text-decoration: none;
    margin: 10px 5px 5px 0;
    font-size: 12px;
  }

  a:hover,
  a:active,
  a:focus {
    background-color: #ddeedf;
  }
`;

export default Hashtag;
