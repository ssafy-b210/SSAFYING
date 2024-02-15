import styled from "styled-components";
import BambooCommentList from "./BambooCommentList";
import CommentInput from "../../Feed/Comment/CommentInput";
import { useEffect, useState } from "react";
import {
  selectOneBamboo,
  createBambooComment,
  deleteBambooComment,
} from "../../../apis/api/Forest";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

interface Props {
  bambooList: any[];
  bambooId: number;
}

function BambooComment({ bambooList, bambooId }: Props) {
  const [bambooData, setBambooData] = useState<any>([]);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    fetchComments();
  }, []);

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

  const handleCommentSubmit = async (comment: string) => {
    try {
      await createBambooComment(bambooId, user.userId, comment);
      await fetchComments();
    } catch (error) {
      console.error("Error submitting comment", error);
    }
  };

  //삭제 api 호출
  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteBambooComment(commentId);

      await fetchComments();
    } catch (error) {
      console.error("Error deleting crew", error);
    }
  };

  return (
    <div>
      <CommentWrapper>
        {bambooData && (
          <BambooCommentList
            commentList={bambooData}
            onDelete={handleDeleteComment}
          />
        )}
      </CommentWrapper>
      <CommentInputContainer>
        <CommentInput onSubmit={handleCommentSubmit} id={bambooId} />
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
