import FeedListItem from "./FeedListItem";
import UserRecommendList from "../UserRecommend/UserRecommendList";
import { getFeedList, getRecommendFeedList } from "../../../apis/api/Feed";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import styled from "styled-components";

function FeedList() {
  const [feedList, setFeedList] = useState<any[]>([]);
  const [recommendFeedList, setRecommendFeedList] = useState<any[]>([]);
  const user = useAppSelector(selectUser);

  console.log("feedlist" + feedList);
  console.log(feedList.length);

  useEffect(() => {
    handleList();
  }, []);

  const handleList = async () => {
    const list = await getFeedList(user.userId);
    const recommendList = await getRecommendFeedList(user.userId);
    console.log("feedlist" + list);
    setFeedList(list || []);
    setRecommendFeedList(recommendList || []);
  };

  return (
    <div>
      <FeedWrapper>
        {feedList.length > 0 && (
          <div className="feed-list">
            {feedList.map((item, index) => (
              <FeedListItem key={index} feed={item} />
            ))}
          </div>
        )}
        <UserRecommendList />
        {recommendFeedList.length > 0 && (
          <RecommendWrapper>
            <p>추천 게시물</p>
            {recommendFeedList.map((item, index) => (
              <FeedListItem key={index} feed={item} />
            ))}
          </RecommendWrapper>
        )}
      </FeedWrapper>
      <UserRecommendList />
    </div>
  );
}
export default FeedList;

const FeedWrapper = styled.div``;

const RecommendWrapper = styled.div`
  p {
    color: gray;
    font-size: 13px;
    margin-left: 12px;
  }
`;
