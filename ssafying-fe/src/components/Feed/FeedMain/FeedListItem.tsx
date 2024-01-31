import FeedListItemUser from "./FeedListItemUser";
import FeedListItemImg from "./FeedListItemImg";
import FeedListItemBtn from "./FeedListItemBtn";
import FeedContent from "./FeedContent";
import styled from "styled-components";

function FeedListItem() {
  return (
    <FeedListItemWrapper>
      <FeedListItemUser />
      <FeedContent />
      <FeedListItemImg />
      <FeedListItemBtn />
    </FeedListItemWrapper>
  );
}
export default FeedListItem;

const FeedListItemWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 15px 20px;
`;
