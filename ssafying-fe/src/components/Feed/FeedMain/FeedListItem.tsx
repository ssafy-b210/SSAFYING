import FeedListItemUser from "./FeedListItemUser";
import FeedListItemImg from "./FeedListItemImg";
import FeedListItemBtn from "./FeedListItemBtn";
import FeedContent from "./FeedContent";
import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.jpg";

interface FeedProps {
  feed: any;
}

function FeedListItem({ feed }: FeedProps) {
  return (
    <FeedListItemWrapper>
      <FeedListItemUser userImg={userImage} nickname="aeong" userId={5} />
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
  padding: 15px;
  margin: 10px;
  box-sizing: border-box;
`;
