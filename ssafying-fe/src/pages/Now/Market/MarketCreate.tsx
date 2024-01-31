import styled from "styled-components";

import CreateBtn from "../../../components/All/Board/BoardCreate/CreateBtn";
import CreateContent from "../../../components/All/Board/BoardCreate/CreateContent";
import CreateTitle from "../../../components/All/Board/BoardCreate/CreateTitle";
import SelectCategory, {
  Option,
} from "../../../components/All/Board/BoardCreate/SelectCategory";
import AddPhoto from "../../../components/Now/Market/AddPhoto";
import MarketPriceInput from "../../../components/Now/Market/MarketPriceInput";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";

const bigcategory: Option[] = [
  { value: "1", label: "팝니다" },
  { value: "2", label: "삽니다" },
  { value: "3", label: "나눔합니다" },
];

const isSold: Option[] = [
  { value: "1", label: "판매중" },
  { value: "2", label: "판매완료" },
  { value: "3", label: "예약중" },
];

function MarketCreate() {
  return (
    <Wrapper>
      <BackBtnHeader
        backLink="/"
        htext={<h2>중고거래</h2>}
        isCenter={true}
      ></BackBtnHeader>
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
    </Wrapper>
  );
}

export default MarketCreate;

const Wrapper = styled.div`
  padding: 20px;
`;
