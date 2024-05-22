import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BoardBtn from "../../All/Board/BoardBtn";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { deleteMarket, selectMarketOne } from "../../../apis/api/Market";
import { createChattingRoom } from "../../../apis/api/Chat";
import { useNavigate } from "react-router-dom";

//카드 눌렀을 때 중고장터 detail
interface MarketMoreModalProps {
  card: {
    title: string;
    writer: string;
    marketWay: string;
    price: number;
    content: string;
    imageUrl?: { imageId: number; imageUrl: string }[] | undefined;
    soldout: boolean;
    marketId: number;
  };
  onDelete: () => void;
}

function MarketMoreModal({ card, onDelete }: MarketMoreModalProps) {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [marketData, setMarketData] = useState<any>(null);

  const handleDeleteMarket = () => {
    deleteMarket(card.marketId)
      .then((response: any) => {
        console.log("market deleted successfully", response);
        onDelete();
        setIsModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting market", error);
      });
  };

  const handleCreateChattingRoom = async () => {
    const res = await createChattingRoom([marketData.userId, user.userId]);
    navigate(`/chat/${res}`);
  };

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const data = await selectMarketOne(card.marketId); // API 호출
        setMarketData(data.resultData); // API 응답을 상태에 저장
      } catch (error) {
        console.error("Error fetching market data", error);
      }
    };

    if (isModalOpen) {
      console.log(card.marketId);
      fetchMarketData(); // 모달이 열릴 때만 API 호출
    }
  }, [card.marketId, isModalOpen]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      if (card.imageUrl && card.imageUrl.length > 0) {
        const urls = card.imageUrl.map((image) => image.imageUrl);
        setImageUrls(urls);
      }
    };

    fetchImageUrls();
  }, [card.imageUrl]);

  return (
    <div>
      {isModalOpen && marketData && (
        <Card>
          <Content>
            <Title>{marketData.title}</Title>
            <Writer>
              <div className="small-title">By.</div> {marketData.nickname}
            </Writer>
            <IsSelling>
              <div className="small-title">거래여부</div>
              {card.soldout ? "판매 완료" : "판매 중"}
            </IsSelling>
            <Category>
              <div className="small-title">카테고리</div>
              {marketData.marketWay}
            </Category>
            <Price>
              <div className="small-title">가격</div>
              {marketData.price}원
            </Price>
            <Copy>{marketData.content}</Copy>
            {marketData.imageUrl &&
              marketData.imageUrl.length > 0 &&
              marketData.imageUrl.map(
                (
                  image: { imageId: number; imageUrl: string },
                  index: number
                ) => (
                  <Image
                    key={index}
                    src={image.imageUrl}
                    alt={`Image ${index}`}
                  />
                )
              )}

            {user.nickname === card.writer ? (
              <Flex>
                {/* <BoardBtn btnmsg="수정" link="" /> */}
                <BoardBtn
                  btnmsg="삭제"
                  link="/market"
                  onClick={handleDeleteMarket}
                />
              </Flex>
            ) : (
              <Flex>
                <BoardBtn
                  btnmsg="채팅하기"
                  onClick={handleCreateChattingRoom}
                />
              </Flex>
            )}
          </Content>
        </Card>
      )}
    </div>
  );
}

export default MarketMoreModal;

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
const Price = styled.p`
  display: flex;
  flex-direction: row;
  .small-title {
    font-weight: bold;
    padding-right: 10px;
  }
`;
const IsSelling = styled.p`
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

const Image = styled.img`
  width: 300px;
`;

const Flex = styled.div`
  display: flex;
  button {
    background-color: black;
    color: white;
    padding: 5px 20px;
  }
`;
