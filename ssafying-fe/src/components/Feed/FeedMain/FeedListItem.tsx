import FeedListItemUser from "./FeedListItemUser";
import FeedListItemImg from "./FeedListItemImg";
import FeedListItemBtn from "./FeedListItemBtn";
import FeedContent from "./FeedContent";
import styled from "styled-components";

interface FeedProps {
  feed: any;
}

function FeedListItem({ feed }: FeedProps) {
  console.log("피드", feed);
  return (
    <FeedListItemWrapper>
      <FeedListItemUser
        userImg={feed.user.profileImageUrl}
        nickname={feed.user.nickname}
        userId={feed.user.id}
        time={feed.user.createdAt}
      />
      <FeedContent content={feed.content} hashtag={feed.feedTags} />
      {feed.feedImages !== undefined && feed.feedImages.length > 0 && (
        <FeedListItemImg imageUrls={feed.feedImages} />
      )}
      <FeedListItemBtn likeCount={feed.likeCount} feedId={feed.id} />
    </FeedListItemWrapper>
  );
}
export default FeedListItem;

const FeedListItemWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-sizing: border-box;
`;
