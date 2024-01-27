import CreateBtn from "../../../components/All/Board/BoardCreate/CreateBtn";
import CreateContent from "../../../components/All/Board/BoardCreate/CreateContent";
import CreateTitle from "../../../components/All/Board/BoardCreate/CreateTitle";
import SelectCategory, {
  Option,
} from "../../../components/All/Board/BoardCreate/SelectCategory";
import BoardHeaderWithoutPlus from "../../../components/All/Board/BoardMenu/BoardHeaderWithoutPlus";

const category: Option[] = [
  { value: "1", label: "스터디" },
  { value: "2", label: "챌린지" },
  { value: "3", label: "동창회/동호회" },
  { value: "4", label: "액티비티" },
  { value: "5", label: "번개 회식" },
  { value: "6", label: "공모전/프로젝트" },
  { value: "7", label: "기타" },
];

const location: Option[] = [
  { value: "1", label: "전국" },
  { value: "2", label: "서울" },
  { value: "3", label: "경기" },
  { value: "4", label: "인천" },
  { value: "5", label: "부산" },
  { value: "6", label: "대구" },
  { value: "7", label: "광주" },
  { value: "8", label: "대전" },
  { value: "9", label: "울산" },
  { value: "10", label: "세종" },
  { value: "11", label: "강원" },
  { value: "12", label: "경남" },
  { value: "13", label: "경북" },
  { value: "14", label: "전남" },
  { value: "15", label: "전북" },
  { value: "16", label: "충남" },
  { value: "17", label: "충북" },
  { value: "18", label: "제주" },
];

function CrewCreate() {
  return (
    <div>
      <BoardHeaderWithoutPlus header="사람 구하기"></BoardHeaderWithoutPlus>
      <SelectCategory
        category="지역"
        options={location}
        defaultValue="1"
      ></SelectCategory>
      <SelectCategory
        category="카테고리"
        options={category}
        defaultValue="1"
      ></SelectCategory>
      <CreateTitle></CreateTitle>
      <CreateContent></CreateContent>
      <CreateBtn></CreateBtn>
    </div>
  );
}

export default CrewCreate;
