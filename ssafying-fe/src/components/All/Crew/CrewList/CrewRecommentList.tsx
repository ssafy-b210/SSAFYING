import styled from "styled-components";
import CrewRecommentItem from "./CrewRecommentItem";

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
  onDelete: (id: number) => void;
}

function CrewRecommentList({ replies, onDelete }: RepliesProps) {
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <CrewRecommentItem
          key={reply.id}
          commentId={reply.id}
          commentUser={reply.user}
          content={reply.content}
          onDelete={onDelete}
        />
      ))}
    </RecommentListWrapper>
  );
}

export default CrewRecommentList;

const RecommentListWrapper = styled.div`
  margin-top: 8px;
  padding-left: 40px;
`;
