import React, { useEffect } from "react";
import FlipCard from "./FlipCard";
import styled from "styled-components";

interface recruitProps {
  recruitList: { name: string; code: string }[];
}

function FlipCardList({ recruitList }: recruitProps) {
  console.log(recruitList);
  return (
    <Container>
      {recruitList.map((item: any, index: number) => (
        <FlipCard
          index={item.id}
          title={item.position.title}
          company={item.company.detail.name}
          url={item.url}
        />
      ))}
    </Container>
  );
}

export default FlipCardList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
