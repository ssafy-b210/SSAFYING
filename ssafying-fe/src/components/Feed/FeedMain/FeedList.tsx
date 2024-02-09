import FeedListItem from "./FeedListItem";
import UserRecommendList from "../UserRecommend/UserRecommendList";
import { getFeedList } from "../../../apis/api/Feed";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

function FeedList() {
  const [feedList, setFeedList] = useState<any[]>([]);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    handleList();
  }, []);

  const handleList = async () => {
    const list = await getFeedList(user.userId);
    console.log(list);
    setFeedList(list);
  };

  return (
    <div>
      <div className="feed-list">
        {feedList.map((item, index) => (
          <FeedListItem key={index} feed={item} />
        ))}
      </div>
      <UserRecommendList />
    </div>
  );
}
export default FeedList;
