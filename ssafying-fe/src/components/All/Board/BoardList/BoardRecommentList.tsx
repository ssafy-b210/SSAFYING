import styled from "styled-components";
import BoardRecommentItem from "./BoardRecommentItem";

interface RepliesProps {
  onClick: () => void;
  replies: {
    replyId: number;
    commentId: number;
    nickname: string;
    content: string;
  }[];
}

function BoardRecommentList({ onClick, replies }: RepliesProps) {
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <BoardRecommentItem
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

export default BoardRecommentList;

const RecommentListWrapper = styled.div`
  margin-top: 8px;
  padding-left: 40px;
`;
