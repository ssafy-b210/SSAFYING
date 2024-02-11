import styled from "styled-components";
import Modal from "../../Common/Modal";
import MarketMoreModal from "./MarketMoreModal";

import isSelling from "../../../assets/img/imgBtn/isSelling.svg";
import isNotSelling from "../../../assets/img/imgBtn/isNotSelling.svg";

interface MarketItemProps {
  card: {
    title: string;
    writer: string;
    isSold: boolean;
    marketWay: string;
    price: number;
    content: string;
  };
  index: number;
}

function MarketCardListItem({ card, index }: MarketItemProps) {
  const marketId = index;
  return (
    <div>
      <Card key={index}>
        <Wrapper>
          <Front>
            <Title>
              {card.title.length < 18
                ? card.title
                : card.title.slice(0, 17) + "..."}
            </Title>
            <hr />
            <SmallContainer>
              <Price>{card.price}원</Price>
              {card.isSold ? (
                <img src={isSelling} alt="isSelling" />
              ) : (
                <img src={isNotSelling} alt="isNotSelling" />
              )}
            </SmallContainer>
          </Front>
          <Back>
            <Content>
              {card.content.length < 100
                ? card.content
                : card.content.slice(0, 99) + "..."}
            </Content>
            <Button>
              <Modal btnTxt="더보기">
                <MarketMoreModal card={card} marketId={marketId} />
              </Modal>
            </Button>
          </Back>
        </Wrapper>
      </Card>
    </div>
  );
}

export default MarketCardListItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s;
  transform-style: preserve-3d;
  border: 3px solid gray;
  border-radius: 20px;
`;
const Card = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  perspective: 1100px;
  &:hover ${Wrapper} {
    transform: rotateY(180deg);
  }
`;
const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;

  hr {
    width: 80%;
  }

  img {
    width: 100px;
    height: 30px;
    padding: 10px;
  }
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;
`;

const Title = styled.h2`
  height: 30%;
  display: flex;
  text-align: start;
  justify-content: center;
  padding: 0 12px;
`;
const Price = styled.p`
  margin-left: 30px;
`;
const Content = styled.p`
  padding: 0 10px;
`;

const Button = styled.div``;
