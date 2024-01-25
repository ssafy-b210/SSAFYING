import React from "react";
import styled from "styled-components";

interface ImgBtnProps {
  src: string;
  onClick: () => void;
  size: string;
}

function ImgBtn({ src, onClick, size }: ImgBtnProps) {
  return <Img src={src} onClick={onClick} height={size} alt="button" />;
}

export default ImgBtn;

const Img = styled.img`
  margin: 3px 7px;
`;
