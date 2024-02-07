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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isRecruitingChecked, setIsRecruitingChecked] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("지역");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsRecruitingChecked(isChecked);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/all"
        htext={<h2>사람 구해요</h2>}
        isCenter={true}
        extraBtn={
          <Modal btnTxt="작성">
            <CrewCreateModal></CrewCreateModal>
          </Modal>
        }
      />
      <CrewSortTab onCategoryChange={handleCategoryChange}></CrewSortTab>
      <SearchBar
        onCheckboxChange={handleCheckboxChange}
        onLocationChange={handleLocationChange}
      ></SearchBar>
      <CrewCardList
        selectedCategory={selectedCategory}
        isRecruitingChecked={isRecruitingChecked}
        selectedLocation={selectedLocation}
      ></CrewCardList>
      <Footer></Footer>
    </Wrapper>
  );
}
export default CrewList;
const Wrapper = styled.div``;
