import React, { useState } from "react";
import styled from "styled-components";
import SelectCategory, {
  Option,
} from "../../../components/All/Board/BoardCreate/SelectCategory";
import MarketPriceInput from "./MarketPriceInput";
import CreateTitle from "../../All/Board/BoardCreate/CreateTitle";
import CreateContent from "../../All/Board/BoardCreate/CreateContent";
import AddPhoto from "./AddPhoto";
import ImgEdit from "../../Feed/FeedCreate/ImgEdit";
import UploadImage from "../../../firebase/UploadImage";

const bigcategory: Option[] = [
  { value: "SELL", label: "팝니다" },
  { value: "BUY", label: "삽니다" },
  { value: "SHARE", label: "나눔합니다" },
];

const isSold: Option[] = [
  { value: "판매중", label: "판매중" },
  { value: "판매완료", label: "판매완료" },
];

function MarketCreateModal() {
  const [selectedCategory, setSelectedCategory] = useState<Option>(
    bigcategory[0]
  );
  const [selectedIsSold, setSelectedIsSold] = useState<Option>(isSold[0]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(""); //업로드된 이미지의 url 상태

  const handleCategoryChange = (newCategory: Option) => {
    // setSelectedCategory(newCategory);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const setImage = (url: string) => {
    setImageUrl(url);
  };

  // const db = firebase.firestore();
  // const storage = firebase.storage();

  return (
    <ModalWrapper>
      <SelectCategory
        category="대분류"
        options={bigcategory}
        defaultValue="1"
        onCategoryChange={handleCategoryChange}
      ></SelectCategory>
      <SelectCategory
        category="거래여부"
        options={isSold}
        defaultValue="1"
        onCategoryChange={handleCategoryChange}
      ></SelectCategory>
      <MarketPriceInput></MarketPriceInput>
      <CreateTitle onTitleChange={handleTitleChange}></CreateTitle>
      <CreateContent onContentChange={handleContentChange}></CreateContent>
      <Text>이미지 업로드</Text>
      <ButtonWrapper>
        <ImgEdit />
        <button>작성</button>
      </ButtonWrapper>
      <UploadImage setImage={setImage}></UploadImage>
    </ModalWrapper>
  );
}

export default MarketCreateModal;

const ModalWrapper = styled.div`
  background-color: transparent;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    margin-top: 10px;
  }
`;

const Text = styled.p`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;
