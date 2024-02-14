import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { selectOneBamboo } from "../../apis/api/Forest";
import BambooComment from "./comment/BambooComment";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";

interface MoreProps {
  card: {
    createdAt: string;
    content: string;
    bambooId: number;
    userId: number;
  };
  time: string;
}

function BambooMoreModal({ card, time }: MoreProps) {
  const [bambooData, setBambooData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const user = useAppSelector(selectUser);

  const fetchBoardData = async () => {
    try {
      const data = await selectOneBamboo(card.bambooId);
      console.log("data", data);
      setBambooData(data.resultData.comments);
    } catch (error) {
      console.error(error);
    }
  };

  // 상세조회 api 호출
  useEffect(() => {
    if (isModalOpen) {
      fetchBoardData();
    }
  }, [card.bambooId, isModalOpen]);

  useEffect(() => {
    fetchBoardData();
  }, []);

  const deleteBamboo = () => {};

  return (
    <Card>
      <Content>
        <div>
          <Copy>{card.content}</Copy>
          <Time>{time}</Time>
          <Button>
            {card.userId === user.userId && (
              <button onClick={deleteBamboo}>삭제</button>
            )}
          </Button>
        </div>
      </Content>
      <Separator />
      <CommentContainer>
        <BambooComment bambooId={card.bambooId} bambooList={bambooData} />
      </CommentContainer>
    </Card>
  );
}

export default BambooMoreModal;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 500px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s linear;

  hr {
    width: 100%;
    margin: 10px 0;
    height: 1px;
    border: none;
    background-color: #ccc;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 20px 0;
`;

const Time = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
  }
  button: hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

const Copy = styled.div`
  font-size: 15px;
  line-height: 1.35;
  text-align: center;
`;

const Separator = styled.hr`
  width: 100%;
  margin: 10px 0;
  height: 1px;
  border: none;
  background-color: #ccc;
`;

const CommentContainer = styled.div`
  width: 90%;
  background-color: white;
`;
