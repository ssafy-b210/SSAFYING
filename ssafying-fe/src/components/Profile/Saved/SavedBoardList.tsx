import BoardCardListItem from "../../All/Board/BoardList/BoardCardListItem";

function SavedBoardList() {
  const testInfo = {
    title: "title",
    content: "content",
    writer: "writer",
    category: "자유",
  };

  return (
    <div>
      <BoardCardListItem card={testInfo} index={1} />
    </div>
  );
}

export default SavedBoardList;
