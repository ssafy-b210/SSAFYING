import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { getFeedComment } from "../../../apis/api/Feed";

interface Props {
  feedId: number;
}

function CommentList({ feedId }: Props) {
  const [highlightedCommentId, setHighlightedCommentId] =
    useState<Number | null>(null);

  const [commentList, setCommentList] = useState<any[]>([]);

  useEffect(() => {
    handleCommentList();
  }, []);

  const handleCommentList = async () => {
    const list = await getFeedComment(feedId);
    console.log(list);
    setCommentList(list || []);
  };

  const comments = [
    {
      commentId: 1,
      nickname: "aeong",
      content: "ㅋㅋㅋㅋㅋ",
      replies: [
        {
          replyId: 1,
          commentId: 2,
          nickname: "aeong",
          content: "ㅎㅎㅎㅎ",
        },
        { replyId: 2, commentId: 1, nickname: "aeong", content: "뭐야" },
        { replyId: 2, commentId: 1, nickname: "aeong", content: "뭐야" },
      ],
    },
    {
      commentId: 1,
      nickname: "yes",
      content: "화이팅",
      replies: [
        { replyId: 1, commentId: 5, nickname: "yes.hh", content: "안녕" },
        { replyId: 2, commentId: 3, nickname: "yes", content: "애옹" },
      ],
    },
    {
      commentId: 1,
      nickname: "yes.hh",
      content: "안녕ㅎㅎ",
      replies: [
        { replyId: 1, commentId: 5, nickname: "yes.hh", content: "안녕" },
        { replyId: 2, commentId: 3, nickname: "yes", content: "애옹" },
      ],
    },
  ];

  const handleCommentClick = (commentId: number) => {
    setHighlightedCommentId(
      commentId === highlightedCommentId ? null : commentId
    );
  };

  return (
    <div>
      {commentList.map((comment, index) => (
        <CommentItem
          key={index}
          commentId={comment.commentId}
          nickname={comment.nickname}
          content={comment.content}
          isHighlighted={comment.commentId === highlightedCommentId}
          onClick={() => handleCommentClick(comment.commentId)}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}

export default CommentList;
