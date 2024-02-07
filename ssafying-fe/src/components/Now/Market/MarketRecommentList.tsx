import styled from "styled-components";
import MarketRecommentItem from "./MarketRecommentItem";

interface RepliesProps {
  onClick: () => void;
  replies: {
    replyId: number;
    commentId: string;
    content: string;
  }[];
}

function MarketRecommentList({ onClick, replies }: RepliesProps) {
  const userId = "aeong";
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <MarketRecommentItem
          key={reply.replyId}
          commentId={reply.commentId}
          userId={userId}
          content={reply.content}
          onClickDelete={() => onClick}
        />
      ))}
    </RecommentListWrapper>
  );
}

export default MarketRecommentList;

const RecommentListWrapper = styled.div`
  margin-top: 8px;
  padding-left: 40px;
`;
