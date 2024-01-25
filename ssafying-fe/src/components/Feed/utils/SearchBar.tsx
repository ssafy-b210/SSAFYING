import React, { ChangeEvent } from "react";
import backArrow from "../../../assets/img/imgBtn/backBtn.svg";
import ImgBtn from "./ImgBtn";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SearchBar() {
  function clickBackBtn() {
    console.log("back");
  }

  function changeSearchInput(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <SearchBarWrapper>
      <Link to="/feedhome" className="back">
        <ImgBtn src={backArrow} size="21px" onClick={clickBackBtn} />
      </Link>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={changeSearchInput}
      />
    </SearchBarWrapper>
  );
}

export default SearchBar;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  max-width: 560px;
  margin: 0 auto;

  input {
    flex: 1;
    width: 100%;
    background-color: lightgray;
    border-radius: 10px;
    padding: 10px;
    border: none;
    margin: 0 5px;
  }
`;
