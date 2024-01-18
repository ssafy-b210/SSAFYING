import FeedListItemUser from "./FeedListItemUser";
import userImage from "../../assets/img/user.svg";
import styled from "styled-components";
import FeedListItemImg from "./FeedListItemImg";

function FeedListItem() {
  return (
    <div>
      <FeedListItemUser />
      <FeedListItemImg />
    </div>
  );
}
export default FeedListItem;
