import styled from "styled-components";
import React, { useState } from "react";
import MarketCardList from "../../../components/Now/Market/MarketCardList";
import MarketSortTab from "../../../components/Now/Market/MarketSortTab";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";
import Modal from "../../../components/Common/Modal";
import MarketCreateModal from "../../../components/Now/Market/MarketCreateModal";
import CenterHeader from "../../../components/Common/CenterHeader";
import Footer from "../../../components/Common/Footer";

function MarketList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/now"
        htext={<h2>중고거래</h2>}
        isCenter={true}
        extraBtn={
          <Modal btnTxt="작성">
            <MarketCreateModal></MarketCreateModal>
          </Modal>
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
