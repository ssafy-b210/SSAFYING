import CreateBtn from "../../../components/All/Board/BoardCreate/CreateBtn";
import CreateContent from "../../../components/All/Board/BoardCreate/CreateContent";
import CreateTitle from "../../../components/All/Board/BoardCreate/CreateTitle";
import SelectCategory, {
  Option,
} from "../../../components/All/Board/BoardCreate/SelectCategory";
import BoardHeaderWithoutPlus from "../../../components/All/Board/BoardMenu/BoardHeaderWithoutPlus";
import AddPhoto from "../../../components/Now/Market/AddPhoto";
import MarketPriceInput from "../../../components/Now/Market/MarketPriceInput";

const bigcategory: Option[] = [
  { value: "1", label: "팝니다" },
  { value: "2", label: "삽니다" },
  { value: "3", label: "나눔합니다" },
];

const isSold: Option[] = [
  { value: "1", label: "판매중" },
  { value: "2", label: "판매완료" },
];

function MarketCreate() {
  return (
    <div>
      <BoardHeaderWithoutPlus header="중고거래"></BoardHeaderWithoutPlus>
      <SelectCategory
        category="대분류"
        options={bigcategory}
        defaultValue="1"
      ></SelectCategory>
      <SelectCategory
        category="거래여부"
        options={isSold}
        defaultValue="1"
      ></SelectCategory>
      <MarketPriceInput></MarketPriceInput>
      <CreateTitle></CreateTitle>
      <CreateContent></CreateContent>
      <AddPhoto></AddPhoto>
      <CreateBtn></CreateBtn>
    </div>
  );
}

export default MarketCreate;
