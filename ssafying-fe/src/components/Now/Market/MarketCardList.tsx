import styled from "styled-components";
import React, { useEffect, useState } from "react";
import MarketCardListItem from "./MarketCardListItem";
import { selectMarketList } from "../../../apis/api/Market";

interface MarketCardListProps {
  selectedCategory: string | null;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 30px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MarketCardList: React.FC<MarketCardListProps> = ({
  selectedCategory,
}) => {
  const [cards, setCards] = useState<
    {
      title: string;
      writer: string;
      soldout: boolean;
      marketWay: string;
      price: number;
      content: string;
    }[]
  >([]);

  const [lastIdx, setLastIdx] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marketData = await selectMarketList(
          selectedCategory ?? undefined
        );
        console.log(marketData);
        if (marketData && marketData.resultData) {
          setLastIdx(lastIdx + 1);
          const newCards = await marketData.resultData.map((res: any) => ({
            title: res.title,
            writer: res.nickname,
            isSold: res.soldout,
            marketWay: res.marketWay,
            price: res.price,
            content: res.content,
          }));
          setCards(newCards);
        }
      } catch (error) {
        console.error(error);
        setCards([]);
      }
    };
    fetchData();
  }, [selectedCategory]);
  return (
    <>
      {cards.length > 0 ? (
        <Container>
          {cards.map((card, index) => (
            <MarketCardListItem key={index} card={card} index={index} />
          ))}
        </Container>
      ) : (
        <NoResultsMessage>검색 결과가 없습니다.</NoResultsMessage>
      )}
    </>
  );
};

export default MarketCardList;

const NoResultsMessage = styled.div`
  padding-top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
