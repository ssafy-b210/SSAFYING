import styled from "styled-components";
import React, { useState } from "react";
import CrewCardList from "../../../components/All/Crew/CrewList/CrewCardList";
import CrewSortTab from "../../../components/All/Crew/CrewList/CrewSortTab";
import SearchBar from "../../../components/All/Crew/CrewList/SearchBar";
import BackBtnHeader from "../../../components/Common/BackBtnHeader";
import PlusBtn from "../../../components/Common/PlusBtn";
import Modal from "../../../components/Common/Modal";
import CrewCreateModal from "../../../components/All/Crew/CrewList/CrewCreateModal";
import CenterHeader from "../../../components/Common/CenterHeader";
import Footer from "../../../components/Common/Footer";

function CrewList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("지역");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  const handleCreateCrew = (newCardInfo: {
    title: string;
    writer: string;
    isRecruit: boolean;
    category: string;
    region: string;
    content: string;
  }) => {
    console.log("New Crew:", newCardInfo);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); //모달 닫기
    console.log("모달 닫힘");
  };

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/all"
        htext={<h2>사람 구해요</h2>}
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
              <CrewCreateModal
                onCreateCrew={handleCreateCrew}
                onCloseModal={handleCloseModal}
              ></CrewCreateModal>
            </Modal>
          </div>
        }
      />
      <CrewSortTab onCategoryChange={handleCategoryChange}></CrewSortTab>
      <SearchBar onLocationChange={handleLocationChange}></SearchBar>
      <CrewCardList
        selectedCategory={selectedCategory}
        // selectedLocation={selectedLocation}
      ></CrewCardList>
      <Footer></Footer>
    </Wrapper>
  );
}
export default CrewList;
const Wrapper = styled.div``;
