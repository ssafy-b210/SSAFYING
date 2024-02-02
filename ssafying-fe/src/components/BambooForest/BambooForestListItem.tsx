import styled from "styled-components";
import BambooItemModal from "./BambooItemModal";
import BambooMoreModal from "./BambooMoreModal";

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
          <Button>
            <BambooItemModal btnTxt="더보기">
              <BambooMoreModal card={card} />
            </BambooItemModal>
          </Button>
        </Content>
      </Card>
    </div>
  );
}

export default BambooForestListItem;

const Card = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 20px 10px;
  width: 200px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  height: 250px;
  overflow: hidden;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  z-index: 1;
`;

const Time = styled.h2`
  font-size: 15px;
`;

const Copy = styled.p`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  line-height: 1.35;
  width: 100%;
  height: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: unset;
  -webkit-line-clamp: 3;
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
  border-radius: 20px;
`;
