import ContentContainer from "../../../components/Now/Market/ContentContainer";
import CommentContainer from "../../../components/All/Board/BoardDetail/CommentContainer";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";

function CrewDetail() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>사람 구하기</h2>}
        isCenter={true}
      ></BackBtnHeader>
      <ContentContainer></ContentContainer>
      <CommentContainer></CommentContainer>
    </div>
  );
}

export default CrewDetail;
