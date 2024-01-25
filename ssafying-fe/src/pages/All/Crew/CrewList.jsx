import PlusBtn from "../../../components/All/Board/PlusBtn";
import BoardHeader from "../../../components/All/Crew/CrewList/BoardHeader";
import CrewCardList from "../../../components/All/Crew/CrewList/CrewCardList";
import CrewSortTab from "../../../components/All/Crew/CrewList/CrewSortTab";
import SearchBar from "../../../components/All/Crew/CrewList/SearchBar";

function CrewList() {
  return (
    <div>
      <BoardHeader></BoardHeader>
      <CrewSortTab></CrewSortTab>
      <SearchBar></SearchBar>
      <CrewCardList></CrewCardList>
      <PlusBtn></PlusBtn>
    </div>
  );
}
export default CrewList;
