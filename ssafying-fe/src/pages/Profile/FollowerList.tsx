import styled from "styled-components";
import search from "../../assets/img/imgBtn/search.svg";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import FollowProfileList from "../../components/Profile/Follow/FollowProfileList";
import CenterHeader from "../../components/Common/CenterHeader";
import { useParams } from "react-router-dom";
import { searchFollowerList, selectFollowerList } from "../../apis/api/Follow";
import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";

type FollowProfileType = {
  id: number;
  nickname: string;
  profileImageUrl: string;
};

function FollowerList() {
  const profileUserId = Number(useParams().userId); // 현재 프로필의 유저 아이디

  const [followers, setFollowers] = useState<FollowProfileType[]>([]); // 팔로워 리스트
  const [searchValue, setSearchValue] = useState<string>(""); // 검색 입력값

  // 팔로워 리스트 갱신
  async function getFollowers() {
    const res = await selectFollowerList(profileUserId);
    if (res !== undefined) setFollowers(res.data);
  }

  // 검색 결과 리스트 갱신
  async function searchFollowers() {
    const res = await searchFollowerList(profileUserId, searchValue);
    if (res !== undefined) setFollowers(res.data);
  }

  // 검색 버튼 클릭 시 검색 결과 조회
  function handleInputClickButton(e: MouseEvent<HTMLButtonElement>) {
    searchFollowers();
  }

  // 검색칸에서 Enter키 입력 시 검색 결과 조회
  function handleInputKeyUpEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") searchFollowers();
  }

  // 처음에 한 번 팔로워 리스트 가져와 출력
  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink={`/profile/${profileUserId}`}
        isCenter={true}
        text="나를 팔로우하는 친구"
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
