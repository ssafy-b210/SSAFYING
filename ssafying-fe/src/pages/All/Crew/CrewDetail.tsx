import BoardHeaderWithoutPlus from "../../../components/All/Board/BoardMenu/BoardHeaderWithoutPlus";
import ContentContainer from "../../../components/Now/Market/ContentContainer";
import CommentContainer from "../../../components/All/Board/BoardDetail/CommentContainer";

function CrewDetail() {
  return (
    <div>
      <BoardHeaderWithoutPlus header="사람 구하기" />
      <ContentContainer></ContentContainer>
      <CommentContainer></CommentContainer>
    </div>
  );
}

export default CrewDetail;
