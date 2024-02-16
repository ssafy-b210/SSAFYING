import FeedHeader from "../../components/Feed/FeedMain/FeedHeader";
import FeedList from "../../components/Feed/FeedMain/FeedList";
import styled from "styled-components";

function FeedMain() {
  return (
    <Wrapper>
      <FeedHeader />
      <FeedList />
    </Wrapper>
  );
}
export default FeedMain;

const Wrapper = styled.div`
  padding: 12px;
`;
