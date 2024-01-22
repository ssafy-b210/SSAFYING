import hashtag from "../../../assets/img/scrapButtonIcons/hashtag.svg";
import picturesFolder from "../../../assets/img/scrapButtonIcons/picturesFolder.svg";
import floppyDisk from "../../../assets/img/scrapButtonIcons/floppyDisk.svg";
import styled from "styled-components";

function ScrapTap() {
  return (
    <StyledScrapTab>
      <div>
        <a href="!#">
          <img src={hashtag} alt="" />
        </a>
        <a href="!#">
          <img src={picturesFolder} alt="" />
        </a>
        <a href="!#">
          <img src={floppyDisk} alt="" />
        </a>
      </div>
    </StyledScrapTab>
  );
}

const StyledScrapTab = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;

  a {
    margin: 0 30px;
    padding: 0 8px;
    box-sizing: border-box;
  }
`;

export default ScrapTap;
