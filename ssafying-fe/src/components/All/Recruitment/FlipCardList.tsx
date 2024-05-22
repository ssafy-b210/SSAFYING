import FlipCard from "./FlipCard";
import styled from "styled-components";

interface recruitProps {
  recruitList: { id: number; title: string; company: string; url: string }[];
}

function FlipCardList({ recruitList }: recruitProps) {
  console.log(recruitList);
  return (
    <Container>
      {recruitList.map((item, index) => (
        <FlipCard
          key={index}
          arrIdx={index + 1}
          index={item.id}
          title={item.title}
          company={item.company}
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
