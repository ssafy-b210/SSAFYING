import styled from "styled-components";

interface ImgProps {
  src: string;
  size: string;
}

function RoundImg({ src, size }: ImgProps) {
  return <Img src={src} width={size} />;
}

export default RoundImg;

const Img = styled.img`
  margin: 0 5px;
  border-radius: 50%;
  box-shadow: 1px 1px 20px 0px rgba(134, 134, 134, 0.48);
  -webkit-box-shadow: 1px 1px 20px 0px rgba(134, 134, 134, 0.48);
  -moz-box-shadow: 1px 1px 20px 0px rgba(134, 134, 134, 0.48);
`;
