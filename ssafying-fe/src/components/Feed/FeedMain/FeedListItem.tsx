import FeedListItemUser from "./FeedListItemUser";
import FeedListItemImg from "./FeedListItemImg";
import FeedListItemBtn from "./FeedListItemBtn";
import FeedContent from "./FeedContent";

function FeedListItem() {
  return (
    <div>
      <FeedListItemUser />
      <FeedContent />
      <FeedListItemImg />
      <FeedListItemBtn />
    </div>
  );
}
export default FeedListItem;
