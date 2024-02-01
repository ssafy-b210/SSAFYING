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
    </div>
  );
}

export default BambooForestContent;

const Header = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
