import { useState, useEffect } from "react";
import styled from "styled-components";
import MoreCommentInput from "../../../Feed/Comment/CommentInput";
import saveBtnBlack from "../../../../assets/img/imgBtn/saveBtnBlack.svg";
import saveBtnWhite from "../../../../assets/img/imgBtn/saveBtnWhite.svg";
import ImgBtn from "../../../Feed/utils/ImgBtn";
import BoardCommentList from "./BoardCommentList";
import BoardBtn from "../BoardBtn";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import {
  deleteBoard,
  selectOneBoard,
  createBoardComment,
  deleteBoardComment,
  cancelscrapBoard,
  scrapBoard,
} from "../../../../apis/api/Board";

// 카드눌렀을 때 detail 보이게 하기
interface moreProps {
  card: {
    title: string;
    writer: string;
    content: string;
    category: string;
    isAnonymous: boolean;
    boardId: number;
    scrap: boolean;
  };
  onDelete?: () => void;
}

function BoardMoreModal({ card, onDelete }: moreProps) {
  const user = useAppSelector(selectUser);
  const [isSaved, setIsSaved] = useState(card.scrap);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [boardData, setBoardData] = useState<any>(null);
  const [highlighted, setHighlighted] = useState<Number | null>(null);

  const saveCancel = () => {
    cancelscrapBoard(user.userId, card.boardId);
    setIsSaved(false);
  };

  const saveBoard = () => {
    scrapBoard(user.userId, card.boardId);
    setIsSaved(true);
  };

  const fetchBoardData = async () => {
    try {
      const data = await selectOneBoard(card.boardId, user.userId);
      console.log("data", data);
      setBoardData(data.resultData);
      setIsSaved(data.resultData.scrap);
    } catch (error) {
      console.error(error);
    }
  };
  if (isModalOpen) {
    fetchBoardData();
  }

  useEffect(() => {
    fetchBoardData();
  }, []);

  //deleteBoard api 호출
  const handleDeleteBoard = () => {
    deleteBoard(card.boardId)
      .then((response: any) => {
        console.log("board deleted successfully", response);
        setIsModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting board", error);
      });
  };

  //상세조회 api 호출
  useEffect(() => {
    fetchBoardData();
  }, [card.boardId, isModalOpen]);

  const handleCommentSubmit = async (comment: string) => {
    try {
      if (highlighted === null) {
        await createBoardComment(card.boardId, user.userId, comment, -1);
      } else {
        await createBoardComment(
          card.boardId,
          user.userId,
          comment,
          highlighted
        );
      }
      const data = await selectOneBoard(card.boardId, user.userId);
      setBoardData(data.resultData);
      setIsSaved(data.resultData.scrap);
    } catch (error) {
      console.error("Error submitting comment", error);
    }
  };

  //삭제 api 호출
  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteBoardComment(commentId);

      const data = await selectOneBoard(card.boardId, user.userId);
      setBoardData(data.resultData);
    } catch (error) {
      console.error("Error deleting crew", error);
    }
  };

  return (
    <Wrapper>
      {isModalOpen && boardData && (
        <Card>
          <Content>
            {isSaved ? (
              <ImgBtn src={saveBtnBlack} size="30px" onClick={saveCancel} />
            ) : (
              <ImgBtn src={saveBtnWhite} size="30px" onClick={saveBoard} />
            )}

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
              onDelete={handleDeleteComment}
            />
            <MoreCommentInput
              onSubmit={handleCommentSubmit}
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

const Copy = styled.div`
  font-family: var(--font-serif);
  font-size: 15px;
  line-height: 1.35;
  width: 100%;
`;
const Writer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;
const Category = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  font-size: 13px;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  background-color: white;
  overflow-y: auto;
`;

const Flex = styled.div`
  display: flex;
  button {
    background-color: black;
    color: white;
    padding: 5px 20px;
  }
`;
