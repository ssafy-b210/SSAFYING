import CrewCardList from "../../../components/All/Crew/CrewList/CrewCardList";
import CrewSortTab from "../../../components/All/Crew/CrewList/CrewSortTab";
import SearchBar from "../../../components/All/Crew/CrewList/SearchBar";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";

function CrewList() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>게시판</h2>}
        isCenter={true}
        extraBtn={<PlusBtn link="/" />}
      />
      <CrewSortTab></CrewSortTab>
      <SearchBar></SearchBar>
      <CrewCardList></CrewCardList>
    </div>
  );
}
export default CrewList;
