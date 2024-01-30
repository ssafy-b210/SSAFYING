import SearchBar from "../../components/Feed/utils/SearchBar";
import UserItemList from "../../components/Feed/Search/UserItemList";
import HashSearchList from "../../components/Feed/Search/HashSearchList";

function FeedSearch() {
  return (
    <div>
      <SearchBar />
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
      <HashSearchList
        hashList={[
          { hashId: "1", hashTag: "대전" },
          { hashId: "2", hashTag: "점심" },
        ]}
      />
    </div>
  );
}
export default FeedSearch;
