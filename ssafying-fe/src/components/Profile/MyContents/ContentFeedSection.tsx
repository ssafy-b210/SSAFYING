import styled from "styled-components";
import FeedList from "../../Feed/FeedList";
import Hashtag from "../../Feed/utils/HashTag";

function ContentFeedSection() {
  return (
    <StyledContentFeedSection>
      <HashtagList>
        <Hashtag text="기획" />
        <Hashtag text="웹개발" />
        <Hashtag text="공통프로젝트" />
      </HashtagList>
      <FeedList />
    </StyledContentFeedSection>
  );
}

export default ContentFeedSection;

const StyledContentFeedSection = styled.div`
  padding: 0 10px;
`;

const HashtagList = styled.div`
  margin: 0 10px 10px;
`;
