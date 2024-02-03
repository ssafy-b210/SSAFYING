import MarketCardList from "../../../components/Now/Market/MarketCardList";
import MarketSortTab from "../../../components/Now/Market/MarketSortTab";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";
import Modal from "../../../components/Common/Modal";
import MarketCreateModal from "../../../components/Now/Market/MarketCreateModal";

function MarketList() {
  return (
    <div>
      <BackBtnHeader
        backLink="/now"
        htext={<h2>중고거래</h2>}
        isCenter={true}
        extraBtn={
          <Modal btnTxt="작성">
            <MarketCreateModal></MarketCreateModal>
          </Modal>
        }
      />
      <MarketSortTab></MarketSortTab>
      <MarketCardList></MarketCardList>
    </div>
  );
}

export default MarketList;
