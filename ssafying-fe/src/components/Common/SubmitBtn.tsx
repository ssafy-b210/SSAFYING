import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SubmitBtn(props: {
  link: string;
  text: string;
  onClick?: () => void;
}) {
  return (
    <Link to={props.link}>
      <SubmitButton onClick={props.onClick}>{props.text}</SubmitButton>
    </Link>
  );
}

export default SubmitBtn;

const SubmitButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: black;
  font-family: "Noto Sans KR";
  font-size: 16px;
  margin-top: 30px;
`;
