import CrewCardList from "../../../components/All/Crew/CrewList/CrewCardList";
import CrewSortTab from "../../../components/All/Crew/CrewList/CrewSortTab";
import SearchBar from "../../../components/All/Crew/CrewList/SearchBar";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";
import Modal from "../../../components/Common/Modal";
import CrewCreateModal from "../../../components/All/Crew/CrewList/CrewCreateModal";

function CrewList() {
  return (
    <div>
      <BackBtnHeader
        backLink="/all"
        htext={<h2>사람 구해요</h2>}
        isCenter={true}
        extraBtn={
          <Modal btnTxt="작성">
            <CrewCreateModal></CrewCreateModal>
          </Modal>
        }
      />
      <CrewSortTab></CrewSortTab>
      <SearchBar></SearchBar>
      <CrewCardList></CrewCardList>
    </div>
  );
}
export default CrewList;
