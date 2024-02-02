import styled from "styled-components";

import CommentContainer from "../../../components/All/Board/BoardDetail/CommentContainer";
import ContentContainer from "../../../components/Now/Market/ContentContainer";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import { useParams } from "react-router-dom";

function BoardDetail() {
  const { id } = useParams<{ id?: string }>();
  const boardId = id ? parseInt(id, 10) : undefined;
  return (
    <Wrapper>
      <BackBtnHeader
        backLink="/board"
        htext={<h2>게시판</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <ContentContainer></ContentContainer>
      <CommentContainer></CommentContainer>
    </Wrapper>
  );
}

export default BoardDetail;
const Wrapper = styled.div`
  padding: 12px;
`;
