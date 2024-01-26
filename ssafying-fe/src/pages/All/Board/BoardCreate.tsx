import SelectCategory, {
  Option,
} from "../../../components/All/Board/BoardCreate/SelectCategory";
import BoardHeaderWithoutPlus from "../../../components/All/Board/BoardMenu/BoardHeaderWithoutPlus";
import IsAnonymous from "../../../components/All/Board/BoardCreate/CheckAnonymous";
import CreateTitle from "../../../components/All/Board/BoardCreate/CreateTitle";
import CreateContent from "../../../components/All/Board/BoardCreate/CreateContent";
import CreateBtn from "../../../components/All/Board/BoardCreate/CreateBtn";

const options: Option[] = [
  { value: "1", label: "자유" },
  { value: "2", label: "취업" },
  { value: "3", label: "정보" },
  { value: "4", label: "개발" },
  { value: "5", label: "싸피꿀팁" },
  { value: "6", label: "생활" },
  { value: "7", label: "홍보" },
];

function BoardCreate() {
  return (
    <div>
      <BoardHeaderWithoutPlus></BoardHeaderWithoutPlus>
      <SelectCategory options={options} defaultValue="1"></SelectCategory>
      <IsAnonymous></IsAnonymous>
      <CreateTitle></CreateTitle>
      <CreateContent></CreateContent>
      <CreateBtn></CreateBtn>
    </div>
  );
}

export default BoardCreate;
