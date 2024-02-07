import styled from "styled-components";
import BoardRecommentItem from "./BoardRecommentItem";

interface RepliesProps {
  onClick: () => void;
  replies: {
    replyId: number;
    commentId: string;
    content: string;
  }[];
}

function BoardRecommentList({ onClick, replies }: RepliesProps) {
  const userId = "aeong";
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <BoardRecommentItem
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

export default BoardRecommentList;

const RecommentListWrapper = styled.div`
  margin-top: 8px;
  padding-left: 40px;
`;
