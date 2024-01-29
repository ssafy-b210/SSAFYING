import CommentContainer from "../../../components/All/Board/BoardDetail/CommentContainer";
import BoardHeaderWithoutPlus from "../../../components/All/Board/BoardMenu/BoardHeaderWithoutPlus";
import ContentContainer from "../../../components/Now/Market/ContentContainer";

function BoardDetail() {
  return (
    <div>
      <BoardHeaderWithoutPlus header="게시판" />
      <ContentContainer></ContentContainer>
      <CommentContainer></CommentContainer>
    </div>
  );
}

export default BoardDetail;
