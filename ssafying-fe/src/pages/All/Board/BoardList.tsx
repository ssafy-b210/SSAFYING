import styled from "styled-components";
import React, { useState } from "react";
import BoardSortTab from "../../../components/All/Board/BoardList/BoardSortTab";
import BoardCardList from "../../../components/All/Board/BoardList/BoardCardList";
import SearchBarOnly from "../../../components/All/Board/BoardList/SearchBarOnly";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";
import Modal from "../../../components/Common/Modal";
import BoardCreateModal from "../../../components/All/Board/BoardList/BoardCreateModal";
import CenterHeader from "../../../components/Common/CenterHeader";
import Footer from "../../../components/Common/Footer";

function BoardList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCreateBoard = (newCardInfo: {
    title: string;
    writer: string;
    category: string;
    content: string;
  }) => {
    console.log("New", newCardInfo);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); //모달닫기
    console.log("Modal Closed");
  };

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/all"
        htext={<h2>게시판</h2>}
        isCenter={true}
        extraBtn={
          <div>
            {/* <PlusBtn onClick={handleOpenModal} /> */}
            <Modal
              btnTxt="작성"
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            >
              {" "}
              {/* 모달 컴포넌트 */}
              <BoardCreateModal
                onCreateBoard={handleCreateBoard}
                onCloseModal={handleCloseModal}
              />
            </Modal>
          </div>
        }
      />

      <BoardSortTab onCategoryChange={handleCategoryChange}></BoardSortTab>
      <SearchBarOnly></SearchBarOnly>
      <BoardCardList selectedCategory={selectedCategory}></BoardCardList>
      <Footer></Footer>
    </Wrapper>
  );
}

export default BoardList;
const Wrapper = styled.div`
  // padding: 12px;
  // 반응형으로 나중에!! 설정
`;
