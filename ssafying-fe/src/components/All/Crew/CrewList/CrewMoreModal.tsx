import { useEffect, useState } from "react";
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
    crewId: number;
  };
  onDelete: () => void;
}

const handleCommentSubmit = (comment: string) => {
  console.log("Comment submitted:", comment);
};

function CrewMoreModal({ card, onDelete }: moreProps) {
  const user = useAppSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [crewData, setCrewData] = useState<any>(null);
  const [highlighted, setHighlighted] = useState<Number | null>(null);

  //삭제 api 호출
  const handleDeleteCrew = () => {
    deleteCrew(card.crewId)
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
        const data = await selectCrewOne(card.crewId);
        console.log("크루아이디", card.crewId);
        console.log("data", data);
        setCrewData(data.resultData);
      } catch (error) {
        console.log(error);
      }
    };
    if (isModalOpen) {
      fetchCrewData(); // 모달이 열릴 때만 API 호출
    }
  }, [card.crewId, isModalOpen]);

  return (
    <div>
      {isModalOpen && crewData && (
        <Card>
          <Content>
            <Title>{crewData.title}</Title>
            <Text>
              By. &nbsp; <span>{crewData.nickname}</span>
            </Text>
            <Text>
              지역 &nbsp; <span>{crewData.region}</span>
            </Text>
            <Text>
              카테고리 &nbsp; <span>{crewData.category}</span>
            </Text>
            {/* <Text>
              모집여부 &nbsp; <span>{crewData.isRecruit}</span>
            </Text> */}
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
          <div>댓글</div>
          <CommentContainer>
            <CrewCommentList
              crewId={card.crewId}
              parent={(id) => setHighlighted(id)}
              commentList={crewData.parentCommentList}
            />
            <MoreCommentInput
              onSubmit={handleCommentSubmit}
              target="crew"
              id={card.crewId}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
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
  padding: 5px;
  z-index: 1;
  hr {
    width: 90%;
  }
  div {
    margin-top: 5px;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Copy = styled.div`
  font-size: 13px;
  width: 90%;
  height: 100px;
  margin-top: 5px;
`;

const Text = styled.div`
  span {
    font-size: 13px;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  height: 40%;
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
