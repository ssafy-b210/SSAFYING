import styled from "styled-components";
import RecommentItem from "./RecommentItem";

interface RepliesProps {
  onClick: () => void;
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
}

function RecommentList({ onClick, replies }: RepliesProps) {
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <RecommentItem
          key={reply.id}
          commentId={reply.id}
          commentUser={reply.user}
          content={reply.content}
          onClickDelete={() => onClick}
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
