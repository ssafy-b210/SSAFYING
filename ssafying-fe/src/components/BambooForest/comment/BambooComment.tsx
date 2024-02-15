import styled from "styled-components";
import BambooCommentList from "./BambooCommentList";
import CommentInput from "../../Feed/Comment/CommentInput";
import { useEffect, useState } from "react";
import { selectOneBamboo } from "../../../apis/api/Forest";

interface Props {
  bambooList: any[];
  bambooId: number;
}

function BambooComment({ bambooList, bambooId }: Props) {
  const [bambooData, setBambooData] = useState<any>(bambooList);

  const handleCommentSubmit = async (comment: string) => {
    console.log("Comment submitted:", comment);
    await fetchComments();
  };

  const fetchComments = async () => {
    try {
      const data = await selectOneBamboo(bambooId);
      setBambooData(data.resultData.comments);
      bambooList = data.resultData.comments;
    } catch (error) {
      console.error(error);
    }
  };

  console.log(bambooList);

  return (
    <div>
      <CommentWrapper>
        {bambooList && <BambooCommentList commentList={bambooList} />}
      </CommentWrapper>
      <CommentInputContainer>
        <CommentInput
          onSubmit={handleCommentSubmit}
          target="bamboo"
          id={bambooId}
        />
      </CommentInputContainer>
    </div>
  );
}

export default BambooComment;

const CommentInputContainer = styled.div`
  width: 300px;
  background-color: white;
`;

const CommentWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  overflow-y: scroll;
  margin-bottom: 10px;
`;
