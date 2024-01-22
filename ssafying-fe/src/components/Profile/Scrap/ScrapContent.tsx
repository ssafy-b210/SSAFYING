import HashtagList from "./HashtagList";
import MyFeedList from "./MyFeedList";
import ScrapSortTap from "./ScrapSortTab";

function ScrapContent() {
  return (
    <div>
      <ScrapSortTap />
      <HashtagList />
      <MyFeedList />
    </div>
  );
}

export default ScrapContent;
