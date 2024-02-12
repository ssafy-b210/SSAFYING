import React, { useState } from "react";
import styled from "styled-components";
import SelectCategory, {
  Option,
} from "../../../components/All/Board/BoardCreate/SelectCategory";
import MarketPriceInput from "./MarketPriceInput";
import CreateTitle from "../../All/Board/BoardCreate/CreateTitle";
import CreateContent from "../../All/Board/BoardCreate/CreateContent";
import ImgEdit from "../../Feed/FeedCreate/ImgEdit";
import UploadImage from "../../../firebase/UploadImage";
import ToggleBtn from "./ToggleBtn";
import { createMarket } from "../../../apis/api/Market";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { useNavigate } from "react-router-dom";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import { fstorage } from "../../../apis/firebase";

interface MarketCreateModalProps {
  onCreateMarket: (newCardInfo: {
    title: string;
    writer: string;
    isSold: boolean; //거래중 or 거래완료
    marketWay: string; // sell, buy, share
    price: number;
    content: string;
  }) => void;
  onCloseModal: () => void; //모달 닫기 함수 추가
}

const MarketCreateModal: React.FC<MarketCreateModalProps> = ({
  onCreateMarket,
  onCloseModal,
}) => {
  const bigcategory: Option[] = [
    { value: "SELL", label: "팝니다" },
    { value: "BUY", label: "삽니다" },
    { value: "SHARE", label: "나눔합니다" },
  ];

  //marketWay
  const [selectedCategory, setSelectedCategory] = useState<Option>(
    bigcategory[0]
  );
  const [isSold, setIsSold] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(""); //업로드된 이미지의 url 상태
  const [images, setImages] = useState<string[]>([]); // 이미지들의 URL을 저장할 상태
  const user = useAppSelector(selectUser);
  const [modalVisible, setModalVisible] = useState(true);
  const navigate = useNavigate();

  //marketWay
  const handleCategoryChange = (newCategory: Option) => {
    setSelectedCategory(newCategory);
    // 카테고리가 SHARE일 때 가격을 0으로 설정
    if (newCategory.value === "SHARE") {
      setPrice(0);
    }
  };

  const handleToggle = (value: boolean) => {
    setIsSold(value);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handlePriceChange = (newPrice: number) => {
    setPrice(newPrice);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const setImage = (url: string) => {
    setImageUrl(url);
  };

  const handleModalClose = () => {
    onCloseModal();
    window.location.reload(); //새로고침
  };

  //firebase

  //api 호출
  const handleCreateMarket = () => {
    //Redux userId에 따라 바꾸기
    const writerName = user.nickname;

    //이미지 파일을 blob으로 변환하여 업로드
    const uploadTasks = images.map(async (image) => {
      // const fileRef = ref(fstorage, `${writerName}/${image.name}`);
      // await uploadString(fileRef, image, "data_url");
      // const downloadURL = await getDownloadURL(fileRef);
      // return downloadURL;
    });

    //이미지 업로드가 모두 완료된 후에 진행
    Promise.all(uploadTasks).then((downloadURLs) => {
      // createMarket 함수 호출 시 imageUrls 매개변수에 배열 전달
      createMarket(
        1,
        selectedCategory.value,
        isSold,
        price,
        title,
        content
        // downloadURLs
      );
    });

    //userId 나중에 바꾸기
    // 이미지 URL을 담은 배열 생성
    const imageUrls: string[] = [imageUrl];

    //작성 후 상태 초기화
    setSelectedCategory(bigcategory[0]);
    setIsSold(false);
    setPrice(0);
    setTitle("");
    setContent("");
    setImageUrl("");

    //작성한 게시글 정보를 부모 컴포넌트로 전달
    onCreateMarket({
      title,
      writer: user.nickname,
      isSold,
      marketWay: selectedCategory.value,
      price,
      content,
    });
    handleModalClose();
  };

  return (
    <ModalWrapper visible={modalVisible}>
      <SelectCategory
        category="대분류"
        options={bigcategory}
        defaultValue="1"
        onCategoryChange={handleCategoryChange}
      ></SelectCategory>
      <ToggleBtn isSold={isSold} onToggle={handleToggle} />
      <MarketPriceInput
        onPriceChange={handlePriceChange}
        disabled={selectedCategory.value === "SHARE"}
      />
      {selectedCategory.value === "SHARE" && (
        <Message>📌가격은 0으로 설정됩니다.</Message>
      )}
      <CreateTitle onTitleChange={handleTitleChange}></CreateTitle>
      <CreateContent onContentChange={handleContentChange}></CreateContent>
      <Text>이미지 업로드</Text>
      <ButtonWrapper>
        <ImgEdit onImagesChange={setImages} />
        <button onClick={handleCreateMarket}>작성</button>
      </ButtonWrapper>
      <UploadImage setImage={setImage}></UploadImage>
    </ModalWrapper>
  );
};

export default MarketCreateModal;

const ModalWrapper = styled.div<{ visible: boolean }>`
  background-color: transparent;
  padding: 20px;
  display: ${(props) => (props.visible ? "block" : "none")};
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

const Message = styled.span`
  font-size: 12px;
  margin-left: 30px;
`;
