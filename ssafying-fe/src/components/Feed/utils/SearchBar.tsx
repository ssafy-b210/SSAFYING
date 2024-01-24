import React, { ChangeEvent } from "react";
import backArrow from "../../../assets/img/imgBtn/backBtn.svg";
import ImgBtn from "./ImgBtn";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;

  input {
    flex: 1; /* Take up remaining available space */
    width: 100%; /* Allow the input to expand within its container */
    background-color: lightgray;
    border-radius: 10px;
    padding: 10px;
    border: none;
    margin: 0 5px;
  }
`;

function SearchBar() {
  function clickBackBtn() {
    console.log("back");
  }

  function changeSearchInput(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <SearchBarWrapper>
      <ImgBtn src={backArrow} size="21px" onClick={clickBackBtn} />
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={changeSearchInput}
      />
    </SearchBarWrapper>
  );
}

export default SearchBar;
