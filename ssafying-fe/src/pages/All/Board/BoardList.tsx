import BoardHeader from "../../../components/All/Board/BoardMenu/BoardHeader";
import BoardSortTab from "../../../components/All/Board/BoardList/BoardSortTab";
import BoardCardList from "../../../components/All/Board/BoardList/BoardCardList";
import PlusBtn from "../../../components/All/Board/PlusBtn";
import SearchBarOnly from "../../../components/All/Board/BoardList/SearchBarOnly";

function BoardList() {
  return (
    <div>
      <BoardHeader header="게시판"></BoardHeader>
      <BoardSortTab></BoardSortTab>
      <SearchBarOnly></SearchBarOnly>
      <BoardCardList></BoardCardList>
    </div>
  );
}

export default BoardList;
