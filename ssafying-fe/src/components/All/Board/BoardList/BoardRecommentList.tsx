import styled from "styled-components";
import BoardRecommentItem from "./BoardRecommentItem";

interface RepliesProps {
  replies: {
    anonymous: boolean;
    childCommentList: any[];
    comment: string;
    createdAt: string;
    nickname: string;
    userName: string;
    commentId: number;
    profileImgUrl: string;
    userId: number;
  }[];
  onDelete: (id: number) => void;
}

function BoardRecommentList({ replies, onDelete }: RepliesProps) {
  return (
    <RecommentListWrapper>
      {replies.map((reply) => (
        <BoardRecommentItem
          key={reply.commentId}
          commentId={reply.commentId}
          nickname={reply.nickname}
          content={reply.comment}
          userId={reply.userId}
          time={reply.createdAt}
          profile={reply.profileImgUrl}
          onDelete={onDelete}
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
