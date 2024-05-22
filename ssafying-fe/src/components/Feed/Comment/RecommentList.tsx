import styled from "styled-components";
import RecommentItem from "./RecommentItem";

interface RepliesProps {
  replies: {
    id: number;
    user: {
      id: number;
      nickname: string;
      profileImageUrl: string;
    };
    content: string;
    likeCounts: number;
    deleted: boolean;
  }[];
  onDelete: (id: number) => void;
}

function RecommentList({ replies, onDelete }: RepliesProps) {
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <RecommentItem
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

export default RecommentList;

const RecommentListWrapper = styled.div`
  margin-top: 8px;
  padding-left: 40px;
`;
