import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MoreCommentInput from "../../../Feed/Comment/CommentInput";
import CrewCommentList from "./CrewCommentList";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import BoardBtn from "../../Board/BoardBtn";
import { deleteCrew, selectCrewOne } from "../../../../apis/api/Crew";

// 카드 눌렀을때 crew detail
interface moreProps {
  card: {
    title: string;
    nickname: string;
    isRecruit: boolean;
    category: string;
    region: string;
    content: string;
  };
  crewId: number;
  onDelete: () => void;
}

const handleCommentSubmit = (comment: string) => {
  console.log("Comment submitted:", comment);
};

function CrewMoreModal({ card, crewId, onDelete }: moreProps) {
  const user = useAppSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [crewData, setCrewData] = useState<any>(null);
  const [highlighted, setHighlighted] = useState<Number | null>(null);

  //삭제 api 호출
  const handleDeleteCrew = () => {
    deleteCrew(crewId)
      .then((response: any) => {
        console.log("crew deleted successfully", response);
        onDelete();
        setIsModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting crew", error);
      });
  };

  // selectCrewOne 상세조회 api 호출
  useEffect(() => {
    const fetchCrewData = async () => {
      try {
        const data = await selectCrewOne(crewId);
        console.log("크루아이디", crewId);
        console.log("data", data);
        setCrewData(data.resultData);
      } catch (error) {
        console.log(error);
      }
    };
    if (isModalOpen) {
      fetchCrewData(); // 모달이 열릴 때만 API 호출
    }
  }, [crewId, isModalOpen]);

  return (
    <div>
      {isModalOpen && crewData && (
        <Card>
          <Content>
            <Title>{crewData.title}</Title>
            <Writer>
              <div className="small-title">By.</div> {crewData.nickname}
            </Writer>
            <Location>
              <div className="small-title">지역</div>
              {crewData.region}
            </Location>
            <Category>
              <div className="small-title">카테고리</div>
              {crewData.category}
            </Category>
            <IsRecruiting>
              <div className="small-title">모집여부</div>
              {crewData.isRecruit}
            </IsRecruiting>
            <Copy>{crewData.content}</Copy>
            {user.nickname === crewData.nickname && (
              <Flex>
                {/* 수정화면만들기 */}
                {/* <BoardBtn btnmsg="수정" link="" /> */}
                <BoardBtn
                  btnmsg="삭제"
                  link="/crew"
                  onClick={handleDeleteCrew}
                />
              </Flex>
            )}
            <hr />
          </Content>
          <CommentContainer>
            <CrewCommentList
              crewId={crewId}
              parent={(id) => setHighlighted(id)}
            />
            <MoreCommentInput
              onSubmit={handleCommentSubmit}
              target="crew"
              id={crewId}
              highlighted={highlighted}
            ></MoreCommentInput>
          </CommentContainer>
        </Card>
      )}
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
