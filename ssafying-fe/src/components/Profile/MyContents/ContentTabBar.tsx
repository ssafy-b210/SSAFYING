import hashtag from "../../../assets/img/scrapButtonIcons/hashtag.svg";
import picturesFolder from "../../../assets/img/scrapButtonIcons/picturesFolder.svg";
import floppyDisk from "../../../assets/img/scrapButtonIcons/floppyDisk.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ContentTabBar() {
  return (
    <StyledContentTabBar>
      <Link to="" className="acitve">
        <img src={hashtag} alt="" />
      </Link>
      <Link to="portfolio">
        <img src={picturesFolder} alt="" />
      </Link>
      <Link to="saved">
        <img src={floppyDisk} alt="" />
      </Link>
    </StyledContentTabBar>
  );
}

const StyledContentTabBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  a {
    position: relative;
    padding: 10px;
    margin: 0 16px;
  }

  a.acitve::after {
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
