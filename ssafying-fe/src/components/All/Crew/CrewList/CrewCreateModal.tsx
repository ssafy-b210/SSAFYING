import React, { useState } from "react";
import styled from "styled-components";
import SelectCategory, { Option } from "../../Board/BoardCreate/SelectCategory";
import ToggleBtn from "../ToggleBtn";
import CreateTitle from "../../Board/BoardCreate/CreateTitle";
import CreateContent from "../../Board/BoardCreate/CreateContent";
import { createCrew } from "../../../../apis/api/Crew";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";

interface CrewCreateModalProps {
  onCreateCrew: (newCardInfo: {
    title: string;
    writer: string;
    isRecruit: boolean;
    category: string;
    region: string;
    content: string;
  }) => void;
  onCloseModal: () => void; //모달 닫기 함수
}

const CrewCreateModal: React.FC<CrewCreateModalProps> = ({
  onCreateCrew,
  onCloseModal,
}) => {
  const category: Option[] = [
    { value: "STUDY", label: "스터디" },
    { value: "CHALLENGE", label: "챌린지" },
    { value: "SOCIETY", label: "동창회/동호회" },
    { value: "ACTIVITY", label: "액티비티" },
    { value: "FLASHMOB", label: "번개 회식" },
    { value: "PROJECT", label: "공모전/프로젝트" },
    { value: "ETC", label: "기타" },
  ];

  const location: Option[] = [
    { value: "ALL", label: "전국" },
    { value: "SEOUL", label: "서울" },
    { value: "GYEONGGI", label: "경기" },
    { value: "INCHEON", label: "인천" },
    { value: "BUSAN", label: "부산" },
    { value: "GWANGJU", label: "광주" },
    { value: "DAEJEON", label: "대전" },
    { value: "DAEGU", label: "대구" },
    { value: "ULSAN", label: "울산" },
    { value: "SEJONG", label: "세종" },
    { value: "GANGWON", label: "강원" },
    { value: "GYEONGSANG", label: "경상" },
    { value: "JEOLLA", label: "전라" },
    { value: "CHUNGCHEONG", label: "충청" },
    { value: "JEJU", label: "제주" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Option>(category[0]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<Option>(location[0]);
  const [isRecruit, setIsRecruit] = useState(false);
  const user = useAppSelector(selectUser);
  const [modalVisible, setModalVisible] = useState(true);
  const navigate = useNavigate();

  const handleCategoryChange = (newCategory: Option) => {
    setSelectedCategory(newCategory);
  };

  const handleRegionChange = (newRegion: Option) => {
    setSelectedRegion(newRegion);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  //모집중인지 확인
  const handleToggle = (value: boolean) => {
    setIsRecruit(value);
  };

  const handleModalClose = () => {
    onCloseModal();
    window.location.reload(); //새로고침
  };

  //api 호출
  const handleCreateCrew = () => {
    if (!title.trim() || !content.trim()) {
      alert("빈칸을 채워주세요.");
      return;
    }

    createCrew(
      user.userId,
      title,
      content,
      selectedRegion.value,
      selectedCategory.value,
      isRecruit
    );

    //작성 후 상태 초기화
    setTitle("");
    setContent("");
    setSelectedCategory(category[0]);
    setSelectedRegion(location[0]);
    setIsRecruit(false);

    //작성한 게시글 정보를 부모 컴포넌트로 전달하기
    onCreateCrew({
      title,
      writer: user.nickname,
      isRecruit,
      category: selectedCategory.value,
      region: selectedRegion.value,
      content,
    });
    handleModalClose();
  };

  return (
    <ModalWrapper visible={modalVisible}>
      <ButtonWrapper>
        <SelectCategory
          category="지역"
          options={location}
          defaultValue={location[0].value}
          onCategoryChange={handleRegionChange}
        ></SelectCategory>
        <SelectCategory
          category="카테고리"
          options={category}
          defaultValue={category[0].value}
          onCategoryChange={handleCategoryChange}
        ></SelectCategory>
        <ToggleBtn isRecruit={isRecruit} onToggle={handleToggle} />
        <CreateTitle onTitleChange={handleTitleChange} />
        <CreateContent onContentChange={handleContentChange} />
        <button onClick={handleCreateCrew}>작성</button>
      </ButtonWrapper>
    </ModalWrapper>
  );
};
export default CrewCreateModal;

const ModalWrapper = styled.div<{ visible: boolean }>`
  overflow: hidden;
  overflow-y: auto; /* 세로 스크롤이 필요한 경우에만 스크롤바를 표시합니다. */
  width: 350px;
`;

const ButtonWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 350px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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
