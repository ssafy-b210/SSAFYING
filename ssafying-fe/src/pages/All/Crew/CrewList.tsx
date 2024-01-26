import CrewCardList from "../../../components/All/Crew/CrewList/CrewCardList";
import CrewSortTab from "../../../components/All/Crew/CrewList/CrewSortTab";
import SearchBar from "../../../components/All/Crew/CrewList/SearchBar";

import BoardHeader from "../../../components/All/Board/BoardMenu/BoardHeader";

function CrewList() {
  return (
    <div>
      <BoardHeader header="사람구해요"></BoardHeader>
      <CrewSortTab></CrewSortTab>
      <SearchBar></SearchBar>
      <CrewCardList></CrewCardList>
    </div>
  );
}
export default CrewList;
