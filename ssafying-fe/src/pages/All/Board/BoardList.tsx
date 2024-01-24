import BoardHeader from "../../../components/All/Board/BoardMenu/BoardHeader";
import BoardSortTab from "../../../components/All/Board/BoardList/BoardSortTab";
import BoardCardList from "../../../components/All/Board/BoardList/BoardCardList";
import PlusBtn from "../../../components/All/Board/PlusBtn";

function BoardList() {
  return (
    <div>
      <BoardHeader></BoardHeader>
      <BoardSortTab></BoardSortTab>
      <BoardCardList></BoardCardList>
      <PlusBtn></PlusBtn>
    </div>
  );
}

export default BoardList;
