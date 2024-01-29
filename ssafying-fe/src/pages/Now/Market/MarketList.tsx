import MarketCardList from "../../../components/Now/Market/MarketCardList";
import BoardHeader from "../../../components/All/Board/BoardMenu/BoardHeader";
import MarketSortTab from "../../../components/Now/Market/MarketSortTab";

function MarketList() {
  return (
    <div>
      <BoardHeader header="중고거래"></BoardHeader>
      <MarketSortTab></MarketSortTab>
      <MarketCardList></MarketCardList>
    </div>
  );
}

export default MarketList;
