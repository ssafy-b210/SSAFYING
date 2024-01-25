import React, { ReactNode } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import All from "../../assets/img/TabBar/All.svg";
import Now from "../../assets/img/TabBar/Now.svg";
import Forest from "../../assets/img/TabBar/Forest.svg";
import Home from "../../assets/img/TabBar/Home.svg";

interface BottomNavBarProps {
  children: ReactNode;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ children }) => {
  return (
    <Nav className="wrapper">
      {children}
      <Button>
        <img src={Now} alt="Now" />
        NOW
      </Button>
      <Button>
        <img src={All} alt="All" />
        ALL
      </Button>
      <Button>
        <img src={Home} alt="Home" />
        HOME
      </Button>
      <Button>
        <img src={Forest} alt="Forest" />
        FOREST
      </Button>
      <Button>PROFILE</Button>
    </Nav>
  );
};

export default BottomNavBar;

const Nav = styled.nav`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
`;

const Button = styled.div`
  text-align: center;
  float: left;
  width: 20%;
  height: 45px;
  line-height: 45px;
`;
