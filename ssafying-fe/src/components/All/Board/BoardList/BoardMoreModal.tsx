import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MoreCommentInput from "../../../Feed/Comment/CommentInput";
import saveBtnBlack from "../../../../assets/img/imgBtn/saveBtnBlack.svg";
import saveBtnWhite from "../../../../assets/img/imgBtn/saveBtnWhite.svg";
import ImgBtn from "../../../Feed/utils/ImgBtn";
import { scrapBoard } from "../../../../apis/api/Board";
import { cancelscrapBoard } from "../../../../apis/api/Board";
import BoardCommentList from "./BoardCommentList";
import BoardBtn from "../BoardBtn";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import { deleteBoard, selectOneBoard } from "../../../../apis/api/Board";
import Modal from "../../../Common/Modal";
import BoardUpdateModal from "./BoardUpdateModal";

// 카드눌렀을 때 detail 보이게 하기
interface moreProps {
  card: {
    title: string;
    writer: string;
    content: string;
    category: string;
    isAnonymous: boolean;
    boardId: number;
  };
  onDelete: () => void;
}

const handleCommentSubmit = (comment: string) => {
  console.log("Comment submitted:", comment);
};

function BoardMoreModal({ card, onDelete }: moreProps) {
  const user = useAppSelector(selectUser);
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [boardData, setBoardData] = useState<any>(null);
  const [highlighted, setHighlighted] = useState<Number | null>(null);

  useEffect(() => {
    const savedStatus = localStorage.getItem(`savedStatus_${card.boardId}`);
    setIsSaved(savedStatus === "true");
  }, []);

  //스크랩api 호출
  const toggleSaved = () => {
    const newSavedStatus = !isSaved;
    setIsSaved(newSavedStatus);
    localStorage.setItem(`savedStatus_${card.boardId}`, String(newSavedStatus));
    if (!newSavedStatus) {
      //scrapBoard(userId, boardId)
      scrapBoard(user.userId, 1);
    } else {
      cancelscrapBoard(user.userId, 1);
    }
  };

  //deleteBoard api 호출
  const handleDeleteBoard = () => {
    deleteBoard(card.boardId)
      .then((response: any) => {
        console.log("board deleted successfully", response);
        onDelete();
        setIsModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting board", error);
      });
  };

  //상세조회 api 호출
  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const data = await selectOneBoard(card.boardId, user.userId);
        console.log("data", data);
        setBoardData(data.resultData);
      } catch (error) {
        console.error(error);
      }
    };
    if (isModalOpen) {
      fetchBoardData();
    }
  }, [card.boardId, isModalOpen]);

  const handleEditBoard = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); //모달닫기
    console.log("Modal Closed");
  };

  const handleUpdateBoard = (newCardInfo: {
    title: string;
    writer: string;
    category: string;
    content: string;
  }) => {
    console.log("New", newCardInfo);
  };

  return (
    <Wrapper>
      {isModalOpen && boardData && (
        <Card>
          <Content>
            <ImgBtn
              src={isSaved ? saveBtnBlack : saveBtnWhite}
              size="30px"
              onClick={toggleSaved}
            />
            <Title>{boardData.title}</Title>
            <Writer>
              <div className="small-title">By.</div>
              {boardData.anonymous ? "익명" : boardData.nickname}
            </Writer>
            <Category>
              <div className="small-title">카테고리</div> {boardData.category}
            </Category>
            <Copy>{boardData.content}</Copy>
            {user.nickname === boardData.nickname && (
              <Flex>
                {/* 수정화면만들기 */}
                {/* <BoardBtn btnmsg="수정" onClick={handleEditBoard} link="" /> */}

                <BoardBtn
                  btnmsg="삭제"
                  onClick={handleDeleteBoard}
                  link="/board"
                />
              </Flex>
            )}
            <hr />
          </Content>
          <CommentContainer>
            <BoardCommentList
              boardId={card.boardId}
              parent={(id) => setHighlighted(id)}
              commentList={boardData.comments}
            />
            <MoreCommentInput
              onSubmit={handleCommentSubmit}
              target="board"
              id={card.boardId}
              highlighted={highlighted}
            ></MoreCommentInput>
          </CommentContainer>
        </Card>
      )}
    </Wrapper>
  );
}

export default BoardMoreModal;

const Wrapper = styled.div``;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 500px;
  text-align: center;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  z-index: 1;
  hr {
    width: 90%;
  }
`;
const Title = styled.h1`
  font-size: 20px;
`;

const Copy = styled.p`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  line-height: 1.35;
  width: 100%;
  height: 100px;
`;
const Writer = styled.p`
  display: flex;
  flex-direction: row;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;
const Category = styled.p`
  display: flex;
  flex-direction: row;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const Flex = styled.div`
  display: flex;
  button {
    background-color: black;
    color: white;
    padding: 5px 20px;
  }
`;
