import styled from "styled-components";
import React, { useState } from "react";
import MarketCardList from "../../../components/Now/Market/MarketCardList";
import MarketSortTab from "../../../components/Now/Market/MarketSortTab";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import Modal from "../../../components/Common/Modal";
import MarketCreateModal from "../../../components/Now/Market/MarketCreateModal";
import CenterHeader from "../../../components/Common/CenterHeader";
import Footer from "../../../components/Common/Footer";

function MarketList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCreateMarket = (newCardInfo: {
    title: string;
    writer: string;
    isSold: boolean;
    marketWay: string;
    price: number;
    content: string;
  }) => {
    console.log("New", newCardInfo);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); //모달닫기
    console.log("Modal Closed");
  };

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/now"
        htext={<h2>중고거래</h2>}
        isCenter={true}
        extraBtn={
          <div>
            {/* <PlusBtn onClick={handleOpenModal} /> */}
            <Modal
              btnTxt="작성"
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            >
              <MarketCreateModal
                onCreateMarket={handleCreateMarket}
                onCloseModal={handleCloseModal}
              />
            </Modal>
          </div>
        }
      />
      <MarketSortTab onCategoryChange={handleCategoryChange}></MarketSortTab>
      <MarketCardList selectedCategory={selectedCategory}></MarketCardList>
      <Footer></Footer>
    </Wrapper>
  );
}

export default MarketList;

const Wrapper = styled.div``;
