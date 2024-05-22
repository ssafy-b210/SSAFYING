import styled from "styled-components";
import Modal from "../Common/Modal";
import BambooMoreModal from "./BambooMoreModal";
import React, { useState, useEffect } from "react";

interface BambooItemProps {
  card: {
    createdAt: string;
    content: string;
    bambooId: number;
    userId: number;
  };
}

const BambooForestListItem: React.FC<BambooItemProps> = ({ card }) => {
  const [timeDiff, setTimediff] = useState("");

  useEffect(() => {
    if (card.createdAt !== null && card.createdAt !== undefined) {
      calcTimeDiff();
    }
  }, []);

  function calcTimeDiff() {
    const date = new Date(card.createdAt.substring(0, 19));
    const now = new Date();
    const diff = Math.abs(date.getTime() - now.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
      if (days < 7) {
        setTimediff(`${days}일 전`);
      } else {
        setTimediff(`${date}`);
      }
    } else if (hours > 0) {
      setTimediff(`${hours}시간 전`);
    } else if (minutes > 0) {
      setTimediff(`${minutes}분 전`);
    } else {
      setTimediff(`${seconds}초 전`);
    }
  }

  return (
    <div>
      <Card key={card.bambooId}>
        <Content>
          <Copy>{card.content}</Copy>
          <Time>{timeDiff}</Time>
          <Button>
            <Modal btnTxt="더보기">
              <BambooMoreModal card={card} time={timeDiff} />
            </Modal>
          </Button>
        </Content>
      </Card>
    </div>
  );
};

export default BambooForestListItem;

const Card = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 20px 10px;
  width: 220px;
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
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 75px;
`;

const Button = styled.div`
  width: 100%;
  button {
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px 20px;
  }
`;
