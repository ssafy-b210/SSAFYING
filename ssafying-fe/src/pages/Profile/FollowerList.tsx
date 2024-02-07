import styled from "styled-components";
import search from "../../assets/img/imgBtn/search.svg";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import FollowProfileList from "../../components/Profile/Follow/FollowProfileList";
import CenterHeader from "../../components/Common/CenterHeader";
import { useEffect, useState } from "react";
import { selectFollowerList } from "../../apis/api/Follow";

function FollowerList() {
  const [followers, setFollowers] = useState([]);

  async function getFollowerList(userId: number) {
    const res: any = await selectFollowerList(userId);
    setFollowers(res.data);
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
        <input type="text" placeholder="검색어를 입력해주세요." />
        <img src={search} alt="검색" />
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
    padding-left: 45px;
    font-family: "Noto Sans KR", "Noto Sans", sans-serif;
    border: none;
    border-radius: 10px;
  }

  input:focus {
    outline: none;
  }

  img {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;
