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
    } else if (e.target.value !== "") {
      try {
        const res = await getFeedSearchNickname(e.target.value);
        setUserList(res || []);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    } else if (e.target.value === "") {
      setHashtagList([]);
      setUserList([]);
    }
  };
  return (
    <div>
      <SearchBar
        onChange={handleSearchChange}
        placeholder="해시태그와 사용자 닉네임을 검색해보세요 ex) #싸핑, 애옹"
      />
      {hashtagList.length > 0 && (
        <div className="feed-list">
          {hashtagList.map((item) => (
            <FeedListItem feed={item} />
          ))}
        </div>
      )}
      {userList.length > 0 && <UserItemList userList={userList} />}
    </div>
  );
}

export default SearchResult;
