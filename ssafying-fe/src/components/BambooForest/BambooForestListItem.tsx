import React from "react";
import styled, { css } from "styled-components";

// CSS 변수 정의
const d = "700ms";
const e = "cubic-bezier(0.19, 1, 0.22, 1)";
const bpMd = "600px";

// 배열 데이터
const imageIds = [
  "1517021897933-0e0319cfbc28",
  "1533903345306-15d1c30952de",
  "1545243424-0ce743321e11",
  "1531306728370-e2ebd9d7bb99",
];

interface BambooItemProps {
  card: {
    time: string;
    content: string;
  };
  index: number;
}

function BambooForestListItem({ card, index }: BambooItemProps) {
  return (
    <div>
      <Card key={index}>
        <Content>
          <Copy>{card.content}</Copy>
          <Time>{card.time} 전</Time>
          <Button>댓글보기</Button>
        </Content>
      </Card>
    </div>
  );
}

export default BambooForestListItem;

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 200px;
  text-align: center;
  border-radius: 10px;
  color: whitesmoke;
  background-color: whitesmoke;
  margin-right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: ${bpMd}) {
    height: 350px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(${d} * 1.5) ${e};
    pointer-events: none;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.32) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.54) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.79) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(${d} * 2) ${e};
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform var(${d}) ${e};
  z-index: 1;

  > * + * {
    margin-top: 1rem;
  }
`;

const Time = styled.h2`
  font-size: 15px;
`;

const Copy = styled.p`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  line-height: 1.35;
`;

const Button = styled.button`
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;

  &:hover {
    background-color: lighten(black, 5%);
  }

  &:focus {
    outline: 1px dashed yellow;
    outline-offset: 3px;
  }
`;
