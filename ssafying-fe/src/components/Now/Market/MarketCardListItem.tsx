import styled from "styled-components";
import Modal from "../../Common/Modal";
import MarketMoreModal from "./MarketMoreModal";

import isSelling from "../../../assets/img/imgBtn/isSelling.svg";
import isNotSelling from "../../../assets/img/imgBtn/isNotSelling.svg";

interface MarketItemProps {
  card: {
    title: string;
    price: number;
    isSelling: boolean;
    content: string;
    writer: string;
  };
  index: number;
}

function MarketCardListItem({ card, index }: MarketItemProps) {
  return (
    <div>
      <Card key={index}>
        <Wrapper>
          <Front>
            <Title>{card.title}</Title>
            <hr />
            <SmallContainer>
              <Price>{card.price}</Price>
              {card.isSelling ? (
                <img src={isSelling} alt="isSelling" />
              ) : (
                <img src={isNotSelling} alt="isNotSelling" />
              )}
            </SmallContainer>
          </Front>
          <Back>
            <Content>{card.content}</Content>
            <Button>
              <Modal btnTxt="더보기">
                <MarketMoreModal card={card} />
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

const Title = styled.h2``;
const Price = styled.p`
  margin-left: 30px;
`;
const Content = styled.p``;

const Button = styled.div``;
