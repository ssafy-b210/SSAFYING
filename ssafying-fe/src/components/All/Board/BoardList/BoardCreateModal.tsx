import React, { useState } from "react";
import styled from "styled-components";
import CreateTitle from "../BoardCreate/CreateTitle";
import CreateContent from "../BoardCreate/CreateContent";
import SelectCategory, { Option } from "../../Board/BoardCreate/SelectCategory";
import IsAnonymous from "../BoardCreate/CheckAnonymous";
import { createBoard } from "../../../../apis/api/Board";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";

interface BoardCreateModalProps {
  onCreateBoard: (newCardInfo: {
    title: string;
    writer: string;
    category: string;
    content: string;
    isAnonymous: boolean;
  }) => void;
  onCloseModal: () => void; //모달 닫기 함수 추가
  initialTitle?: string;
  initialContent?: string;
  initialCategory?: string;
}

const BoardCreateModal: React.FC<BoardCreateModalProps> = ({
  onCreateBoard,
  onCloseModal,
  initialTitle = "",
  initialContent = "",
  initialCategory = "",
}) => {
  const options: Option[] = [
    { value: "FREEDOM", label: "자유" },
    { value: "EMPLOYMENT", label: "취업" },
    { value: "INFO", label: "정보" },
    { value: "DEVELOPMENT", label: "개발" },
    { value: "TIP", label: "싸피꿀팁" },
    { value: "LIVING", label: "생활" },
    { value: "PROMOTION", label: "홍보" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Option>(options[0]);
  const [nickname, setNickname] = useState(false); //nickname - false: 실명제
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useAppSelector(selectUser);
  const [modalVisible, setModalVisible] = useState(true);

  const navigate = useNavigate();

  const handleNicknameChange = (newNickname: boolean) => {
    setNickname(newNickname);
  };

  const handleCategoryChange = (newCategory: Option) => {
    setSelectedCategory(newCategory);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleModalClose = () => {
    onCloseModal();
    window.location.reload(); //새로고침
  };

  //api 호출
  const handleCreateBoard = () => {
    if (!title.trim() || !content.trim()) {
      alert("빈칸을 채워주세요.");
      return;
    }
    //Redux userId에 따라 바꾸기
    const writerName = user.nickname;

    //실제 게시글 생성 api 호출
    // boardId 나중에 꼭 바꾸기
    createBoard(1, title, content, selectedCategory.value, nickname);

    //작성 후 상태 초기화
    setTitle("");
    setContent("");
    setSelectedCategory(options[0]);
    setNickname(false);

    //작성한 게시글 정보를 부모 컴포넌트로 전달하기
    onCreateBoard({
      title,
      writer: writerName,
      category: selectedCategory.value,
      content,
      isAnonymous: nickname,
    });
    handleModalClose();
  };

  return (
    <ModalWrapper visible={modalVisible}>
      <ButtonWrapper>
        <SelectCategory
          category="카테고리"
          options={options}
          defaultValue={options[0].value}
          onCategoryChange={handleCategoryChange}
        ></SelectCategory>
        <IsAnonymous onNicknameChange={handleNicknameChange}></IsAnonymous>
        <CreateTitle onTitleChange={handleTitleChange}></CreateTitle>
        <CreateContent onContentChange={handleContentChange}></CreateContent>
        <button onClick={handleCreateBoard}>작성</button>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

export default BoardCreateModal;

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
