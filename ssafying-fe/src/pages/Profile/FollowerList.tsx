import styled from "styled-components";
import search from "../../assets/img/imgBtn/search.svg";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import FollowProfileList from "../../components/Profile/Follow/FollowProfileList";
import CenterHeader from "../../components/Common/CenterHeader";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { searchFollowerList, selectFollowerList } from "../../apis/api/Follow";

function FollowerList() {
  const [followers, setFollowers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function handleChangeSearchValue(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleClickSearch(e: MouseEvent<HTMLButtonElement>) {
    searchFollowers(4);
  }

  function handleEnterKeyFromSearch(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      searchFollowers(4);
    }
  }

  async function getFollowerList(userId: number) {
    const res: any = await selectFollowerList(userId);
    setFollowers(res.data);
  }

  async function searchFollowers(userId: number) {
    // const res: any = await searchFollowerList(userId, searchValue);

    const res: any = [
      {
        id: 5,
        nickname: "폭주기관차",
        profileImageUrl: null,
      },
      {
        id: 2,
        nickname: "리오레이비",
        profileImageUrl: null,
      },
      {
        id: 3,
        nickname: "숭",
        profileImageUrl: null,
      },
    ];

    setFollowers(res);
  }

  useEffect(() => {
    getFollowerList(1);
  }, []);

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/profile"
        isCenter={true}
        text="나를 팔로우하는 친구"
      />
      <SearchBar>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          onChange={handleChangeSearchValue}
          onKeyUp={handleEnterKeyFromSearch}
        />
        <button className="search-btn" onClick={handleClickSearch}>
          <img src={search} alt="검색" />
        </button>
      </SearchBar>
      <FollowProfileList
        data={followers}
        isFollowing={false}
      ></FollowProfileList>
    </Wrapper>
  );
}

export default FollowerList;

const Wrapper = styled.div`
  padding: 12px;
`;

const SearchBar = styled.div`
  position: relative;
  display: flex;

  input {
    position: relative;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-family: "Noto Sans KR", "Noto Sans", sans-serif;
    border: none;
    border-radius: 10px;
  }

  input:focus {
    outline: none;
  }

  .search-btn {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
