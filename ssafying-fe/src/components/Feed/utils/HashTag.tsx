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
    padding: 2px 7px;
    background-color: #fff;
    border-radius: 30px;
    border: 1px solid #b6cdbd;
    box-sizing: border-box;
    color: black;
    text-decoration: none;
    margin: 7px 5px 5px 0;
    font-size: 12px;
  }

  a:hover {
    background-color: #ddeedf;
  }
`;

export default Hashtag;
