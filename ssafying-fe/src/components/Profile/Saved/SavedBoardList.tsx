import { useEffect, useState } from "react";
import { selectSavedBoardList } from "../../../apis/api/Profile";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import styled from "styled-components";
import BoardCardListItem from "../../All/Board/BoardList/BoardCardListItem";

type BoardInfo = {
  card: {
    title: string;
    content: string;
    writer: string;
    category: string;
    isAnonymous: boolean;
    scrap: boolean;
  };
  index: number;
};

function SavedBoardList() {
  const user = useAppSelector(selectUser);

  const [savedBoardList, setSavedBoardList] = useState<BoardInfo[]>([]);

  async function getSavedBoardList() {
    const res = await selectSavedBoardList(user.userId);
    console.log(res);
    if (res !== undefined) setSavedBoardList(res);
  }

  useEffect(() => {
    getSavedBoardList();
  }, []);

  return (
    <div>
      {savedBoardList.length > 0 ? (
        <CardWrapper>
          {savedBoardList.map((item: any, index) => {
            const data = {
              card: {
                title: item.title,
                content: item.content,
                writer: item.nickname,
                category: item.category,
                isAnonymous: item.anonymous,
                boardId: item.boardId,
                scrap: item.scrap,
              },
              index: index,
            };

            return <BoardCardListItem key={data.index} card={data.card} />;
          })}
        </CardWrapper>
      ) : (
        <InfoText>저장된 게시판이 없습니다.</InfoText>
      )}
    </div>
  );
}

export default SavedBoardList;

const InfoText = styled.div`
  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
