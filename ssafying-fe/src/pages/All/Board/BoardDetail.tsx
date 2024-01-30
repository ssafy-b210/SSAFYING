import CommentContainer from "../../../components/All/Board/BoardDetail/CommentContainer";
import ContentContainer from "../../../components/Now/Market/ContentContainer";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";

function BoardDetail() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>게시판</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <ContentContainer></ContentContainer>
      <CommentContainer></CommentContainer>
    </div>
  );
}

export default BoardDetail;
