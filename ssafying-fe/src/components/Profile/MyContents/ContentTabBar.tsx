// import hashtag from "../../../assets/img/scrapButtonIcons/hashtag.svg";
// import picturesFolder from "../../../assets/img/scrapButtonIcons/picturesFolder.svg";
// import floppyDisk from "../../../assets/img/scrapButtonIcons/floppyDisk.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function ContentTabBar() {
  const data = [
    {
      name: "hastag",
      // icon: hashtag,
      alt: "해시태그",
      path: "",
    },
    {
      name: "portfolio",
      // icon: picturesFolder,
      alt: "포트폴리오",
      path: "portfolio",
    },
    {
      name: "saved",
      // icon: floppyDisk,
      alt: "스크랩",
      path: "saved",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("hastag");

  function switchActiveTab(name: string) {
    setActiveTab(name);
  }

  return (
    <StyledContentTabBar>
      {data.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={activeTab === item.name ? "active" : ""}
          onClick={() => switchActiveTab(item.name)}
        >
          {/* <img src={item.icon} alt={item.alt} /> */}
        </Link>
      ))}
    </StyledContentTabBar>
  );
}

const StyledContentTabBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  background-color: rgba(255, 255, 255, 0.7);

  a {
    position: relative;
    padding: 10px;
    margin: 0 16px;
  }

  a.active::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px;
    border-radius: 50%;
    background-color: #fc0000;
    box-sizing: border-box;
  }
`;

export default ContentTabBar;
