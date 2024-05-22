import FeedDetailContent from "../../components/Feed/FeedDetail/FeedDetailContent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFeedDetail, deleteFeedComment } from "../../apis/api/Feed";
import styled from "styled-components";
import CenterHeader from "../../components/Common/CenterHeader";

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

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteFeedComment(commentId);

      getList();
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  };

  return (
    <FeedWrapper>
      <CenterHeader />
      {feed && <FeedDetailContent feed={feed} onDelete={handleDeleteComment} />}
    </FeedWrapper>
  );
}

export default FeedDetail;

const FeedWrapper = styled.div`
  padding-top: 20px;
`;
