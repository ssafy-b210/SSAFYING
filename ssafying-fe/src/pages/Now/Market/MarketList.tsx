import MarketCardList from "../../../components/Now/Market/MarketCardList";
import MarketHeader from "../../../components/Now/Market/MarketHeader";
import MarketSortTab from "../../../components/Now/Market/MarketSortTab";

function MarketList() {
  return (
    <div>
      <MarketHeader></MarketHeader>
      <MarketSortTab></MarketSortTab>
      <MarketCardList></MarketCardList>
    </div>
  );
}

export default MarketList;
