import MenuBar from "../../components/Now/BoardMenu/MenuBar";
import MenuHeader from "../../components/All/Board/BoardMenu/MenuHeader";
import CenterHeader from "../../components/Common/CenterHeader";

function NowMenu() {
  return (
    <div>
      <CenterHeader />
      <MenuHeader header="For Now"></MenuHeader>
      <MenuBar></MenuBar>
    </div>
  );
}

export default NowMenu;
