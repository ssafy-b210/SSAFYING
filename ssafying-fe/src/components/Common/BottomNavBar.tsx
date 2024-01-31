import React, { ReactNode, useState, useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import All from "../../assets/img/TabBar/All.svg";
import Now from "../../assets/img/TabBar/Now.svg";
import Forest from "../../assets/img/TabBar/Forest.svg";
import Home from "../../assets/img/TabBar/Home.svg";

const BottomNavBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TabBarWrapper $visible={visible}>
      <div data-hover="NOW">
        <span>NOW</span>
      </div>
      <div data-hover="ALL">
        <span>ALL</span>
      </div>
      <div data-hover="HOME">
        <span>HOME</span>
      </div>
      <div data-hover="FOREST">
        <span>FOREST</span>
      </div>
      <div data-hover="PROFILE">
        <span>PROFILE</span>
      </div>
    </TabBarWrapper>
  );
};

export default BottomNavBar;

const TabBarWrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.$visible ? "0" : "-60px")};
  left: 0;
  right: 0;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  transition: bottom 0.3s;
  z-index: 1000;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  div {
    position: relative;
    overflow: hidden;
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    padding: 0;
  }

  div span {
    display: block;
    -webkit-transition: -webkit-transform 500ms
      cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
      -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  div:after {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    content: attr(data-hover);
    display: inline;
    text-align: center;
    -webkit-transition: top 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: top 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  div:hover {
    color: #cc8e35;
  }

  div:hover span {
    color: #cc8e35;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  div:hover:after {
    top: 0;
  }

  div:active {
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand;
  }
`;
