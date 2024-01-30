import MarketCardList from "../../../components/Now/Market/MarketCardList";
import MarketSortTab from "../../../components/Now/Market/MarketSortTab";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";

function MarketList() {
  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>중고거래</h2>}
        isCenter={true}
        extraBtn={<PlusBtn link="/" />}
      />
      <MarketSortTab></MarketSortTab>
      <MarketCardList></MarketCardList>
    </div>
  );
}

export default MarketList;
