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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/all"
        htext={<h2>게시판</h2>}
        isCenter={true}
        extraBtn={
          <Modal btnTxt="작성">
            <BoardCreateModal></BoardCreateModal>
          </Modal>
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
