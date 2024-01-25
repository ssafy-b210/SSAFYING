import CrewCardList from "../../../components/All/Crew/CrewList/CrewCardList";
import CrewHeader from "../../../components/All/Crew/CrewList/CrewHeader";
import CrewSortTab from "../../../components/All/Crew/CrewList/CrewSortTab";
import SearchBar from "../../../components/All/Crew/CrewList/SearchBar";

function CrewList() {
  return (
    <div>
      <CrewHeader></CrewHeader>
      <CrewSortTab></CrewSortTab>
      <SearchBar></SearchBar>
      <CrewCardList></CrewCardList>
    </div>
  );
}
export default CrewList;
