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
  };
  index: number;
};

function SavedBoardList() {
  const user = useAppSelector(selectUser);

  const [savedBoardList, setSavedBoardList] = useState<BoardInfo[]>([]);

  async function getSavedBoardList() {
    const res = await selectSavedBoardList(user.userId);
    if (res !== undefined) setSavedBoardList(res.data.resultData);
  }

  useEffect(() => {
    getSavedBoardList();
  }, []);

  return (
    <div>
      {savedBoardList.length > 0 ? (
        <div>
          {savedBoardList.map((item) => (
            <BoardCardListItem card={item.card} index={item.index} />
          ))}
        </div>
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
