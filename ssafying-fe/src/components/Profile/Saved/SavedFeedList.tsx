import styled from "styled-components";
import { selectSavedFeedList } from "../../../apis/api/Profile";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { useEffect, useState } from "react";

function SavedFeedList() {
  const user = useAppSelector(selectUser);

  const [savedFeedList, setSavedFeedList] = useState<any[]>([]);

  async function getSavedFeedList() {
    const res = await selectSavedFeedList(user.userId);
    if (res !== undefined) setSavedFeedList(res.data);
  }

  useEffect(() => {
    getSavedFeedList();
  }, []);

  return (
    <div>
      {savedFeedList.length > 0 ? (
        <div>
          {savedFeedList.map((data: any) => (
            // FIX: 여기에 FeedItem 추가하기
            <div key={data.id}>
              <div>Scrap Feed Item</div>
              <div>{`Content: ${data.content}`}</div>
              <div>{`user: ${data.user.nickname}`}</div>
            </div>
          ))}
        </div>
      ) : (
        <InfoText>저장된 게시물이 없습니다.</InfoText>
      )}
    </div>
  );
}

export default SavedFeedList;

const InfoText = styled.div`
  text-align: center;
`;
