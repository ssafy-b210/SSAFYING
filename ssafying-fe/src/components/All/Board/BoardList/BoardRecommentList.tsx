import styled from "styled-components";
import BoardRecommentItem from "./BoardRecommentItem";

interface RepliesProps {
  replies: {
    id: number;
    user: {
      id: number;
      nickname: string;
    };
    content: string;
    likeCounts: number;
    deleted: boolean;
  }[];
}

function BoardRecommentList({ replies }: RepliesProps) {
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <BoardRecommentItem
          key={reply.id}
          commentId={reply.id}
          commentUser={reply.user}
          content={reply.content}
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
