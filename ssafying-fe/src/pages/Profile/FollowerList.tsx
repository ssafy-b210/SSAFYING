import styled from "styled-components";
import FollowHeader from "../../components/Profile/Follow/FollowHeader";
import UserItemList from "../../components/Feed/Search/UserItemList";

function FollowerList() {
  return (
    <div>
      <FollowHeader text="나를 팔로우하는 친구" />
      <SearchBar>
        <input type="text" placeholder="검색어를 입력해주세요." />
      </SearchBar>
      <UserItemList
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
    </div>
  );
}

export default FollowerList;

const SearchBar = styled.div`
  position: relative;
  display: flex;
  margin: 0 10px;

  input {
    width: 100%;
    background-color: lightgray;
    border-radius: 10px;
    padding: 10px;
    border: none;
    margin: 0 5px;
  }
`;
