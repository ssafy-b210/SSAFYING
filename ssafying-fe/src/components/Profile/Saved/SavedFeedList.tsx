import styled from "styled-components";
import { selectSavedFeedList } from "../../../apis/api/Profile";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { useEffect, useState } from "react";
import FeedListItem from "../../Feed/FeedMain/FeedListItem";

function SavedFeedList() {
  const user = useAppSelector(selectUser);

  const [savedFeedList, setSavedFeedList] = useState<any[]>([]);

  async function getSavedFeedList() {
    const res = await selectSavedFeedList(user.userId);
    if (res !== undefined) setSavedFeedList(res.data.resultData);
  }

  useEffect(() => {
    getSavedFeedList();
  }, []);

  return (
    <div>
      {savedFeedList.length > 0 ? (
        <div>
          {savedFeedList.map((data: any) => {
            const temp = { ...data };
            const feedTags: { id: any; tagName: any }[] = [];

            data.feedTags.map((el: any, index: any) => {
              feedTags.push({
                id: index + 1,
                tagName: el,
              });
            });

            temp.feedTags = feedTags;

            return <FeedListItem key={data.id} feed={temp} />;
          })}
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
