import FeedDetailContent from "../../components/Feed/FeedDetail/FeedDetailContent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFeedDetail } from "../../apis/api/Feed";
import styled from "styled-components";

function FeedDetail() {
  const feedId = Number(useParams().feedId); // 현재 프로필 유저 아이디
  const [feed, setFeed] = useState<any>(null); // 초기 값 변경

  const getList = async () => {
    try {
      const list = await getFeedDetail(feedId);
      setFeed(list);
    } catch (error) {
      console.error("Error fetching feed detail:", error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return <FeedWrapper>{feed && <FeedDetailContent feed={feed} />}</FeedWrapper>;
}

export default FeedDetail;

const FeedWrapper = styled.div`
  padding-top: 20px;
`;
