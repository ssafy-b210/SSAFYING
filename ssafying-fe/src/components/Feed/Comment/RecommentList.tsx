import styled from "styled-components";
import RecommentItem from "./RecommentItem";

interface RepliesProps {
  onClick: () => void;
  replies: {
    replyId: number;
    commentId: number;
    nickname: string;
    content: string;
  }[];
}

function RecommentList({ onClick, replies }: RepliesProps) {
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <RecommentItem
          key={reply.replyId}
          commentId={reply.commentId}
          nickname={reply.nickname}
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
