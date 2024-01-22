import React from "react";
import styled from "styled-components";

interface ImgBtnProps {
  src: string;
  onClick: () => void;
}

function ImgBtn({ src, onClick }: ImgBtnProps) {
  return <Img src={src} onClick={onClick} />;
}

export default ImgBtn;

const Img = styled.img`
  margin: 3px 7px;
  height: 22px;
`;
