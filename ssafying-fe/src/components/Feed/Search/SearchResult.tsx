import React, { useState } from "react";
import SearchBar from "../utils/SearchBar";
import UserItemList from "./UserItemList";
import HashSearchList from "./HashSearchList";
import { getFeedSearch } from "../../../apis/api/Feed";
import FeedListItem from "../FeedMain/FeedListItem";

function SearchResult() {
  const [hashtag, setHashtag] = useState("");
  const [user, setUser] = useState("");
  const [feedList, setFeedList] = useState<any[]>([]);

  console.log(feedList);

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value.charAt(0) === "#") {
      setHashtag(e.target.value);
      try {
        const res = await getFeedSearch(e.target.value.substring(1), user);
        setFeedList(res || []);
      } catch (error) {
        console.error(error);
      }
    } else {
      setUser(e.target.value);
      try {
        const res = await getFeedSearch(hashtag, e.target.value);
        setFeedList(res || []);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div>
      <SearchBar onChange={handleSearchChange} />
      {feedList.length > 0 && (
        <div className="feed-list">
          {feedList.map((item) => (
            <FeedListItem feed={item} />
          ))}
        </div>
      )}
      {/* <UserItemList
        userList={[
          {
            userId: "aeong",
            userImage:
              "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
          },
          {
            userId: "aeong2",
            userImage:
              "https://image.utoimage.com/preview/cp872722/2018/06/201806010732_206.jpg",
          },
        ]}
      />
      <HashSearchList
        hashList={[
          { hashId: "1", hashTag: "대전" },
          { hashId: "2", hashTag: "점심" },
        ]}
      /> */}
    </div>
  );
}

export default SearchResult;
