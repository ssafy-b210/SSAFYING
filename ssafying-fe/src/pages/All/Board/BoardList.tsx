import BoardSortTab from "../../../components/All/Board/BoardList/BoardSortTab";
import BoardCardList from "../../../components/All/Board/BoardList/BoardCardList";
import SearchBarOnly from "../../../components/All/Board/BoardList/SearchBarOnly";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";

function BoardList() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>게시판</h2>}
        isCenter={true}
        extraBtn={<PlusBtn link="/" />}
      />
      <BoardSortTab></BoardSortTab>
      <SearchBarOnly></SearchBarOnly>
      <BoardCardList></BoardCardList>
    </div>
  );
}

export default BoardList;
