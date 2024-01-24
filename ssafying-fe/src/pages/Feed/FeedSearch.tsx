import SearchBar from "../../components/Feed/utils/SearchBar";
import UserItemList from "../../components/Feed/Search/UserItemList";
import userImage from "../../../assets/img/testImg/user.svg";

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
    </div>
  );
}
export default FeedSearch;
