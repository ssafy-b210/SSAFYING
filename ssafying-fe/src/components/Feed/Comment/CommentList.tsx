import { useState } from "react";
import CommentItem from "./CommentItem";

function CommentList() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div>
      <CommentItem
        commentId="aeong"
        userId="aeong"
        content="ㅋㅋㅋㅋㅋ"
        isHighlighted={false}
      />
      <CommentItem
        commentId="yes"
        userId="aeong"
        content="ㅋㅋㅋㅋㅋ"
        isHighlighted={false}
      />
      <CommentItem
        commentId="yes.hh"
        userId="aeong"
        content="안녕ㅎㅎ"
        isHighlighted={false}
      />
    </div>
  );
}
export default CommentList;
