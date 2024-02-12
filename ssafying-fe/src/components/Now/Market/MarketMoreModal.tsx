import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BoardBtn from "../../All/Board/BoardBtn";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { deleteMarket, selectMarketOne } from "../../../apis/api/Market";
import { getDownloadURL, ref } from "firebase/storage";
import { fstorage } from "../../../apis/firebase";

//카드 눌렀을 때 중고장터 detail
interface MarketMoreModalProps {
  card: {
    title: string;
    writer: string;
    isSold: boolean;
    marketWay: string;
    price: number;
    content: string;
    imageUrls?: string[];
  };
  marketId: number;
  onDelete: () => void;
}

function MarketMoreModal({ card, marketId, onDelete }: MarketMoreModalProps) {
  const user = useAppSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  //상세보기 api 호출
  useEffect(() => {
    selectMarketOne(marketId);
  }, [marketId]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      console.log(card.imageUrls);
      if (card.imageUrls && card.imageUrls.length > 0) {
        // 이미지 URL이 존재하고 비어있지 않을 때
        const urls: string[] = [];
        for (const imageUrl of card.imageUrls) {
          const fileRef = ref(fstorage, imageUrl);
          const url = await getDownloadURL(fileRef);
          urls.push(url);
        }
        setImageUrls(urls);
      }
    };

    fetchImageUrls();
  }, [card.imageUrls]);

  const handleDeleteMarket = () => {
    deleteMarket(marketId)
      .then((response: any) => {
        console.log("maket deleted successfully", response);
        onDelete();
        setIsModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting market", error);
      });
  };
  return (
    <div>
      {isModalOpen && (
        <Card>
          <Content>
            <Title>{card.title}</Title>
            <Writer>
              <div className="small-title">By.</div> {card.writer}
            </Writer>
            <IsSelling>
              <div className="small-title">거래여부</div>
              {card.isSold}
            </IsSelling>
            <Category>
              <div className="small-title">카테고리</div>
              {card.marketWay}
            </Category>
            <Price>
              <div className="small-title">가격</div>
              {card.price}원
            </Price>
            <Copy>{card.content}</Copy>
            {imageUrls.map((imageUrl, index) => (
              <Image key={index} src={imageUrl} alt={`Image ${index}`} />
            ))}
            {user.nickname === card.writer ? (
              <Flex>
                {/* 수정화면만들기 */}
                <BoardBtn btnmsg="수정" link="" />
                <BoardBtn
                  btnmsg="삭제"
                  link="/market"
                  onClick={handleDeleteMarket}
                />
              </Flex>
            ) : (
              <Flex>
                <BoardBtn btnmsg="채팅하기" link="/direct" />
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

const CommentContainer = styled.div`
  width: 100%;
  background-color: white;
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
