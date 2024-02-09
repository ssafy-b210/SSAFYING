import styled from "styled-components";
import CrewRecommentItem from "./CrewRecommentItem";

interface RepliesProps {
  onClick: () => void;
  replies: {
    replyId: number;
    commentId: number;
    nickname: string;
    content: string;
  }[];
}

function CrewRecommentList({ onClick, replies }: RepliesProps) {
  const userId = "aeong";
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <CrewRecommentItem
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

export default CrewRecommentList;

const RecommentListWrapper = styled.div`
  margin-top: 8px;
  padding-left: 40px;
`;
