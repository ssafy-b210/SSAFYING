import SelectCategory from "../../../components/All/Board/BoardCreate/SelectCategory";
import BoardHeaderWithoutPlus from "../../../components/All/Board/BoardMenu/BoardHeaderWithoutPlus";
import IsAnonymous from "../../../components/All/Board/BoardCreate/CheckAnonymous";
import CreateTitle from "../../../components/All/Board/BoardCreate/CreateTitle";
import CreateContent from "../../../components/All/Board/BoardCreate/CreateContent";
import CreateBtn from "../../../components/All/Board/BoardCreate/CreateBtn";

function BoardCreate() {
  return (
    <div>
      <BoardHeaderWithoutPlus></BoardHeaderWithoutPlus>
      <SelectCategory></SelectCategory>
      <IsAnonymous></IsAnonymous>
      <CreateTitle></CreateTitle>
      <CreateContent></CreateContent>
      <CreateBtn></CreateBtn>
    </div>
  );
}

export default BoardCreate;
