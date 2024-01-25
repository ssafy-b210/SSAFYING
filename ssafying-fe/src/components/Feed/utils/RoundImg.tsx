import styled from "styled-components";

interface ImgProps {
  src: string;
  size: string;
}

function RoundImg({ src, size }: ImgProps) {
  return <Img src={src} width={size} height={size} />;
}

export default RoundImg;

const Img = styled.img`
  margin: 0 5px;
  border-radius: 50%;
  border: 1px solid lightgray;
`;
