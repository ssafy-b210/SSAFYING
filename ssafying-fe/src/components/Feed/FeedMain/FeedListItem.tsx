import FeedListItemUser from "./FeedListItemUser";
import FeedListItemImg from "./FeedListItemImg";
import FeedListItemBtn from "./FeedListItemBtn";
import FeedLikeCnt from "./FeedLikeCnt";

function FeedListItem() {
  return (
    <div>
      <FeedListItemUser />
      <FeedListItemImg />
      <FeedListItemBtn />
      <FeedLikeCnt />
    </div>
  );
}
export default FeedListItem;
