import styled from "styled-components";
import Modal from "../../../Common/Modal";
import BoardMoreModal from "./BoardMoreModal";
import { selectOneBoard } from "../../../../apis/api/Board";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";

interface BoardItemProps {
  card: {
    title: string;
    writer: string;
    content: string;
    category: string;
    isAnonymous: boolean;
    boardId: number;
    scrap: boolean;
  };
}

function BoardCardListItem({ card }: BoardItemProps) {
  console.log(card);
  return (
    <div>
      <Card>
        <Wrapper>
          <Front>
            <Title>{card && card.title}</Title>
            <hr />
            <Writer>{card.isAnonymous ? "익명" : card.writer}</Writer>
          </Front>
          <Back>
            <Content>{card && card.content}</Content>
            <Button>
              <Modal btnTxt="더보기">
                <BoardMoreModal card={card} />
              </Modal>
            </Button>
          </Back>
        </Wrapper>
      </Card>
    </div>
  );
}

export default BoardCardListItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s;
  transform-style: preserve-3d;
  border: 3px solid gray;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
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

const Title = styled.div`
  height: 30%;
  display: flex;
  text-align: start;
  justify-content: center;
  padding: 0 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Writer = styled.p``;
const Content = styled.div`
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Button = styled.div``;
