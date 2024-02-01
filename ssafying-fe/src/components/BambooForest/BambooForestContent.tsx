import React from "react";
import ImgBtn from "../Feed/utils/ImgBtn";
import logo from "../../assets/img/logoImg/logo1.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BambooForestList from "./BambooForestList";

function BambooForestContent() {
  return (
    <div>
      <Header>
        <Link to="/feedhome" className="home">
          <ImgBtn src={logo} size="32px" />
        </Link>
      </Header>
      <BambooForestList />
      <ButtonWrapper>
        <button>대나무숲에 소리치기</button>
      </ButtonWrapper>
    </div>
  );
}

export default BambooForestContent;

const Header = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding: 10px 20px;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
`;
