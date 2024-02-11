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

  useEffect(() => {
    handleList();
  }, []);

  const handleList = async () => {
    const list = await getFeedList(user.userId);
    console.log(list);
    setFeedList(list || []);
  };

  return (
    <div>
      <div className="feed-list">
        {feedList.map((item, index) => (
          <FeedListItem key={index} feed={item} />
        ))}
      </div>
      <FeedWrapper>
        {feedList.length === 0 ? <p>다른 사용자들을 팔로우해보세요!</p> : ""}
      </FeedWrapper>
      <UserRecommendList />
    </div>
  );
}
export default FeedList;

const FeedWrapper = styled.div`
  text-align: center;
`;
