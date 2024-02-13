import FeedListItem from "./FeedListItem";
import UserRecommendList from "../UserRecommend/UserRecommendList";
import { getFeedList } from "../../../apis/api/Feed";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import styled from "styled-components";

function FeedList() {
  const [feedList, setFeedList] = useState<any[]>([]);
  const user = useAppSelector(selectUser);

  console.log("feedlist" + feedList);

  useEffect(() => {
    handleList();
  }, []);

  const handleList = async () => {
    const list = await getFeedList(user.userId);
    console.log("feedlist" + list);
    setFeedList(list || []);
  };

  return (
    <div>
      <FeedWrapper>
        {feedList.length > 0 ? (
          <div className="feed-list">
            {feedList.map((item, index) => (
              <FeedListItem key={index} feed={item} />
            ))}
          </div>
        ) : (
          <p>팔로우한 사용자의 피드 글이 없습니다.</p>
        )}
      </FeedWrapper>
      <UserRecommendList />
    </div>
  );
}
export default FeedList;

const FeedWrapper = styled.div`
  P {
    text-align: center;
  }
`;
