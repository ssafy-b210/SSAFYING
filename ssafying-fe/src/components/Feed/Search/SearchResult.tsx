import React, { useState } from "react";
import SearchBar from "../utils/SearchBar";
import UserItemList from "./UserItemList";
import HashSearchList from "./HashSearchList";
import {
  getFeedSearchHashtag,
  getFeedSearchNickname,
} from "../../../apis/api/Feed";
import FeedListItem from "../FeedMain/FeedListItem";

function SearchResult() {
  const [hashtagList, setHashtagList] = useState<any[]>([]);
  const [userList, setUserList] = useState<any[]>([]);
  const [feedList, setFeedList] = useState<any[]>([]);

  console.log(feedList);

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value.charAt(0) === "#") {
      try {
        const res = await getFeedSearchHashtag(e.target.value.substring(1));
        setHashtagList(res || []);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const res = await getFeedSearchNickname(e.target.value);
        setUserList(res || []);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div>
      <SearchBar onChange={handleSearchChange} />
      {hashtagList.length > 0 && (
        <div className="feed-list">
          {hashtagList.map((item) => (
            <FeedListItem feed={item} />
          ))}
        </div>
      )}
      {userList.length > 0 && <UserItemList userList={userList} />}
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
