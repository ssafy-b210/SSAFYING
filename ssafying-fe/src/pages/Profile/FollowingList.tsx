import styled from "styled-components";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import search from "../../assets/img/imgBtn/search.svg";
import FollowProfileList from "../../components/Profile/Follow/FollowProfileList";
import CenterHeader from "../../components/Common/CenterHeader";

function FollowingList() {
  const testInfo = [
    {
      nickname: "aeong",
      userImageUrl:
        "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
    },
    {
      nickname: "aeong2",
      userImageUrl:
        "https://image.utoimage.com/preview/cp872722/2018/06/201806010732_206.jpg",
    },
  ];

  return (
    <Wrapper>
      <CenterHeader />
      <BackBtnHeader
        backLink="/profile"
        isCenter={true}
        text="내가 팔로우하는 친구"
      />
      <SearchBar>
        <input type="text" placeholder="검색어를 입력해주세요." />
        <img src={search} alt="검색" />
      </SearchBar>
      <FollowProfileList data={testInfo} isFollowing={true} />
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
