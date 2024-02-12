import hashtag from "../../../assets/img/ProfileIcons/hashtag.svg";
import picturesFolder from "../../../assets/img/ProfileIcons/picturesFolder.svg";
import floppyDisk from "../../../assets/img/ProfileIcons/floppyDisk.svg";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import styled from "styled-components";

function ContentTabBar() {
  const user = useAppSelector(selectUser); // 로그인한 유저 객체
  const profileUserId = useParams().userId; // 마이페이지 유저 id

  // 현재 바라보고 있는 탭 이름
  const [activeTab, setActiveTab] = useState<string>("hashtag");

  // 탭 변경
  function switchActiveTab(name: string) {
    setActiveTab(name);
  }

  return (
    <StyledContentTabBar>
      <Link
        to=""
        className={activeTab === "hashtag" ? "active" : ""}
        onClick={() => switchActiveTab("hashtag")}
      >
        <img src={hashtag} alt="해시태그" />
      </Link>
      <Link
        to="portfolio"
        className={activeTab === "portfolio" ? "active" : ""}
        onClick={() => switchActiveTab("portfolio")}
      >
        <img src={picturesFolder} alt="포트폴리오" />
      </Link>
      {user.userId === Number(profileUserId) ? (
        <Link
          to="saved"
          className={activeTab === "saved" ? "active" : ""}
          onClick={() => switchActiveTab("saved")}
        >
          <img src={floppyDisk} alt="스크랩" />
        </Link>
      ) : null}
    </StyledContentTabBar>
  );
}

export default ContentTabBar;

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
