import MenuBar from "../../components/All/Board/BoardMenu/MenuBar";
import MenuHeader from "../../components/All/Board/BoardMenu/MenuHeader";
import CenterHeader from "../../components/Common/CenterHeader";

function AllMenu() {
  return (
    <div>
      <CenterHeader />
      <MenuHeader header="For All"></MenuHeader>
      <MenuBar></MenuBar>
    </div>
  );
}

export default AllMenu;
