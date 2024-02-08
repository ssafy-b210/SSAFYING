import styled from "styled-components";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import search from "../../assets/img/imgBtn/search.svg";
import FollowProfileList from "../../components/Profile/Follow/FollowProfileList";
import CenterHeader from "../../components/Common/CenterHeader";
import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import {
  searchFollowingList,
  selectFollowingList,
} from "../../apis/api/Follow";
import { useParams } from "react-router-dom";

type FollowProfileType = {
  id: number;
  nickname: string;
  profileImageUrl: string;
};

function FollowingList() {
  const profileUserId = Number(useParams().userId); // 현재 프로필의 유저 아이디

  const [followings, setFollowings] = useState<FollowProfileType[]>([]); // 팔로잉 리스트
  const [searchValue, setSearchValue] = useState<string>(""); // 검색 입력값

  // 팔로잉 리스트 갱신
  async function getFollowings() {
    const res = await selectFollowingList(profileUserId);
    if (res !== undefined) setFollowings(res.data);
  }

  // 검색 결과 리스트 갱신
  async function searchFollowers() {
    const res = await searchFollowingList(profileUserId, searchValue);
    if (res !== undefined) setFollowings(res.data);
  }

  // 검색 버튼 클릭 시 검색 결과 조회
  function handleInputClickButton(e: MouseEvent<HTMLButtonElement>) {
    searchFollowers();
  }

  // 검색칸에서 Enter키 입력 시 검색 결과 조회
  function handleInputKeyUpEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") searchFollowers();
  }

  // 처음에 한 번 팔로잉 리스트 가져와 출력
  useEffect(() => {
    getFollowings();
  }, []);

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink={`/profile/${profileUserId}`}
        isCenter={true}
        text="내가 팔로우하는 친구"
      />
      <SearchBar>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={handleInputKeyUpEnter}
        />
        <button className="search-btn" onClick={handleInputClickButton}>
          <img src={search} alt="검색" />
        </button>
      </SearchBar>
      <FollowProfileList data={followings} isFollowing={true} />
    </Wrapper>
  );
}

export default FollowingList;

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
