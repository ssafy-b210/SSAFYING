import styled from "styled-components";
import RecommentItem from "./RecommentItem";

interface RepliesProps {
  onClick: () => void;
  replies: {
    replyId: number;
    commentId: string;
    content: string;
  }[];
}

function RecommentList({ onClick, replies }: RepliesProps) {
  const userId = "aeong";
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <RecommentItem
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

export default RecommentList;

const RecommentListWrapper = styled.div`
  margin-top: 8px;
  padding-left: 40px;
`;
