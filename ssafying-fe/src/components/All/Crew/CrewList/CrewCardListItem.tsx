import styled from "styled-components";
import Modal from "../../../Common/Modal";
import CrewMoreModal from "./CrewMoreModal";

import isRecruiting from "../../../../assets/img/imgBtn/isRecruiting.svg";
import isNotRecruiting from "../../../../assets/img/imgBtn/isNotRecruiting.svg";

interface CrewItemProps {
  card: {
    title: string;
    nickname: string;
    isRecruit: boolean;
    category: string;
    region: string;
    content: string;
  };
  index: number;
}

// 지역 한글 이름
const regionNameData: any = {
  "": "지역",
  ALL: "전체",
  SEOUL: "서울",
  GYEONGGI: "경기",
  INCHEON: "인천",
  BUSAN: "부산",
  GWANGJU: "광주",
  DAEJEON: "대전",
  DAEGU: "대구",
  ULSAN: "울산",
  SEJONG: "세종",
  GANGWON: "광원",
  GYEONGSANG: "경상",
  JEOLLA: "전라",
  CHUNGCHEONG: "춘천",
  JEJU: "제주",
};

function CrewCardListItem({ card, index }: CrewItemProps) {
  //상세조회 api를 하고 boardId를 거기서 받아오자. 아자아자 화이팅.....
  const crewId = index + 1;

  const handleDeleteBoard = () => {
    // console.log("Board item deleted", boardId);
  };

  return (
    <div>
      <Card key={index}>
        <Wrapper>
          <Front>
            <Title>
              {card.title.length < 15
                ? card.title
                : card.title.slice(0, 14) + "..."}
            </Title>
            <hr />
            <SmallContainer>
              <Writer>{card.nickname}</Writer>
              {card.isRecruit ? (
                <img src={isRecruiting} alt="isRecruiting" />
              ) : (
                <img src={isNotRecruiting} alt="isNotRecruiting" />
              )}
            </SmallContainer>
          </Front>
          <Back>
            <Content>
              {card.content.length < 30
                ? card.content
                : card.content.slice(0, 29) + "..."}
            </Content>
            <Location>
              {regionNameData[`${card.region}`]}에서 구합니다!
            </Location>
            <Button>
              <Modal btnTxt="더보기">
                <CrewMoreModal
                  card={card}
                  crewId={crewId}
                  onDelete={handleDeleteBoard}
                />
              </Modal>
            </Button>
          </Back>
        </Wrapper>
      </Card>
    </div>
  );
}

export default CrewCardListItem;

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

  img {
    width: 80px;
    height: 30px;
    padding-top: 10px;
  }
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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

const Title = styled.h2`
  height: 30%;
  display: flex;
  text-align: start;
  justify-content: center;
  padding: 0 12px;
`;
const Writer = styled.p`
  margin-left: 30px;
`;
const Content = styled.p`
  padding: 0 10px;
`;

const Location = styled.p``;
const Button = styled.div``;
