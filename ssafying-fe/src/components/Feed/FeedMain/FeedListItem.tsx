import FeedListItemUser from "./FeedListItemUser";
import FeedListItemImg from "./FeedListItemImg";
import FeedListItemBtn from "./FeedListItemBtn";
import FeedContent from "./FeedContent";

function FeedListItem() {
  return (
    <div>
      <FeedListItemUser />
      <FeedListItemImg />
      <FeedListItemBtn />
      <FeedContent />
    </div>
  );
}
export default FeedListItem;
