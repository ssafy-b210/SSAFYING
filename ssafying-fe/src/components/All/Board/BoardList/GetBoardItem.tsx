import styled from "styled-components";
import Modal from "../../../Common/Modal";
import BoardMoreModal from "./BoardMoreModal";
import { selectOneBoard } from "../../../../apis/api/Board";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import BoardCardListItem from "./BoardCardListItem";

interface BoardItemProps {
  boardId: number;
}

function GetBoardItem({ boardId }: BoardItemProps) {
  const user = useAppSelector(selectUser);

  const [boardItem, setBoardItem] = useState<any>([]);
  const [card, setCard] = useState<{
    title: string;
    writer: string;
    content: string;
    category: string;
    isAnonymous: boolean;
    boardId: number;
    scrap: boolean;
  }>({
    title: boardItem.title,
    writer: boardItem.nickname,
    content: boardItem.content,
    category: boardItem.category,
    isAnonymous: boardItem.anonymous,
    boardId: boardId,
    scrap: boardItem.boolean,
  });

  const fetchData = async () => {
    try {
      const boardData = await selectOneBoard(boardId, user.userId);
      console.log(boardData);
      if (boardData && boardData.resultData) {
        setBoardItem(boardData.resultData);

        setCard({
          title: boardData.resultData.title,
          writer: boardData.resultData.nickname,
          content: boardData.resultData.content,
          category: boardData.resultData.category,
          isAnonymous: boardData.resultData.anonymous,
          boardId: boardId,
          scrap: boardData.resultData.scrap,
        });
      }
    } catch (error) {
      console.error(error);
      setBoardItem([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BoardCardListItem card={card}></BoardCardListItem>
    </div>
  );
}

export default GetBoardItem;

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

const Title = styled.h3`
  height: 30%;
  display: flex;
  text-align: start;
  justify-content: center;
  padding: 0 12px;
`;
const Writer = styled.p``;
const Content = styled.p`
  padding: 0 10px;
`;

const Button = styled.div``;
