import styled from "styled-components";
import Modal from "../../../Common/Modal";
import BoardMoreModal from "./BoardMoreModal";

interface BoardItemProps {
  card: {
    title: string;
    content: string;
    writer: string;
    category: string;
  };
  index: number;
}

function BoardCardListItem({ card, index }: BoardItemProps) {
  return (
    <div>
      <Card key={index}>
        <Wrapper>
          <Front>
            <Title>{card.title}</Title>
            <hr />
            <Writer>{card.writer}</Writer>
          </Front>
          <Back>
            <Content>{card.content}</Content>
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

const Title = styled.h2``;
const Writer = styled.p``;
const Content = styled.p``;

const Button = styled.div``;
