import PlusBtn from "../../../components/All/Board/PlusBtn";
import MarketCardList from "../../../components/Now/Market/MarketCardList";
import MarketHeader from "../../../components/Now/Market/MarketHeader";
import MarketSortTab from "../../../components/Now/Market/MarketSortTab";

function MarketList() {
  return (
    <div>
      <MarketHeader></MarketHeader>
      <MarketSortTab></MarketSortTab>
      <MarketCardList></MarketCardList>
      <PlusBtn></PlusBtn>
    </div>
  );
}

export default MarketList;
