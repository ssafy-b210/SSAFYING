import React, { ChangeEvent } from "react";
import backArrow from "../../../assets/img/imgBtn/backBtn.svg";
import ImgBtn from "./ImgBtn";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ onChange }: Props) {
  return (
    <SearchBarWrapper>
      <Link to="/feedhome" className="back">
        <ImgBtn src={backArrow} size="21px" />
      </Link>
      <input
        type="text"
        onChange={onChange}
        placeholder="검색어를 입력해주세요."
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
    border-radius: 10px;
    padding: 10px;
    border: none;
    margin: 0 5px;
  }
`;
