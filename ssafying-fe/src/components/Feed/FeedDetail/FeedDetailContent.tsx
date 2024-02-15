import { useState } from "react";
import styled from "styled-components";
import FeedListItemUser from "../FeedMain/FeedListItemUser";
import FeedListItemImg from "../FeedMain/FeedListItemImg";
import FeedListItemBtn from "../FeedMain/FeedListItemBtn";
import FeedContent from "../FeedMain/FeedContent";
import CommentList from "../Comment/CommentList";

interface Props {
  feed: any;
}

function FeedDetailContent({ feed }: Props) {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  console.log(feed);

  return (
    <FeedListItemWrapper>
      <FeedListItemUser
        userImg={feed.user.profileImageUrl}
        nickname={feed.user.nickname}
        userId={feed.user.id}
        time={feed.createdAt}
        feedId={feed.id}
      />
      <FeedContent content={feed.content} hashtag={feed.feedTags} />
      {feed.feedImages !== undefined && feed.feedImages.length > 0 && (
        <FeedListItemImg imageUrls={feed.feedImages} />
      )}
      <FeedListItemBtn likeCount={feed.likeCount} feedId={feed.id} />
      <CommentList
        feedId={feed.id}
        parent={(id) => setHighlighted(id)}
        commentList={feed.parentCommentList}
      />
    </FeedListItemWrapper>
  );
}

export default FeedDetailContent;

const FeedListItemWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-sizing: border-box;
`;
