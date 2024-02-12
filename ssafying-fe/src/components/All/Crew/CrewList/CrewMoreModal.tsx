import React from "react";
import styled from "styled-components";
import MoreCommentInput from "../../../Feed/Comment/CommentInput";
import CrewCommentList from "./CrewCommentList";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import BoardBtn from "../../Board/BoardBtn";
import { deleteCrew } from "../../../../apis/api/Crew";

// 카드 눌렀을때 crew detail
interface moreProps {
  card: {
    title: string;
    writer: string;
    isRecruit: boolean;
    category: string;
    region: string;
    content: string;
  };
  crewId: number;
}

const handleCommentSubmit = (comment: string) => {
  console.log("Comment submitted:", comment);
};

function CrewMoreModal({ card, crewId }: moreProps) {
  const user = useAppSelector(selectUser);

  const handleDeleteCrew = () => {
    deleteCrew(crewId)
      .then((response: any) => {
        console.log("crew deleted successfully", response);
      })
      .catch((error) => {
        console.error("Error deleting crew", error);
      });
  };

  return (
    <div>
      <Card>
        <Content>
          <Title>{card.title}</Title>
          <Writer>
            <div className="small-title">By.</div> {card.writer}
          </Writer>
          <Location>
            <div className="small-title">지역</div>
            {card.region}
          </Location>
          <Category>
            <div className="small-title">카테고리</div>
            {card.category}
          </Category>
          <IsRecruiting>
            <div className="small-title">모집여부</div>
            {card.isRecruit}
          </IsRecruiting>
          <Copy>{card.content}</Copy>
          {user.nickname === card.writer && (
            <Flex>
              {/* 수정화면만들기 */}
              <BoardBtn btnmsg="수정" link="" />
              <BoardBtn btnmsg="삭제" link="/crew" onClick={handleDeleteCrew} />
            </Flex>
          )}
          <hr />
        </Content>
        <CommentContainer>
          <CrewCommentList />
          <MoreCommentInput
            onSubmit={handleCommentSubmit}
            target="crew"
          ></MoreCommentInput>
        </CommentContainer>
      </Card>
    </div>
  );
}

export default CrewMoreModal;
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 10px;
  width: 500px;
  height: 90%;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s linear;
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
const IsRecruiting = styled.p`
  display: flex;
  flex-direction: row;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;
const Location = styled.p`
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