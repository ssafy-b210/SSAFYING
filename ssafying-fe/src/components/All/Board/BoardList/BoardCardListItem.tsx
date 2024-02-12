import styled from "styled-components";
import Modal from "../../../Common/Modal";
import BoardMoreModal from "./BoardMoreModal";

interface BoardItemProps {
  card: {
    title: string;
    content: string;
    writer: string;
    category: string;
    isAnonymous: boolean;
  };
  index: number;
}

function BoardCardListItem({ card, index }: BoardItemProps) {
  //상세조회 api를 하고 boardId를 거기서 받아오자. 아자아자 화이팅.....
  const boardId = index;

  const handleDeleteBoard = () => {
    // console.log("Board item deleted", boardId);
  };

  return (
    <div>
      <Card key={index}>
        <Wrapper>
          <Front>
            <Title>
              {card.title.length < 18
                ? card.title
                : card.title.slice(0, 17) + "..."}
            </Title>
            <hr />
            <Writer>{card.isAnonymous ? "익명" : card.writer}</Writer>
          </Front>
          <Back>
            <Content>
              {card.content.length < 100
                ? card.content
                : card.content.slice(0, 99) + "..."}
            </Content>
            <Button>
              <Modal btnTxt="더보기">
                <BoardMoreModal
                  card={card}
                  boardId={boardId}
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

export default BoardCardListItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s;
  transform-style: preserve-3d;
  border: 3px solid gray;
  border-radius: 20px;
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

const Title = styled.h2`
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
