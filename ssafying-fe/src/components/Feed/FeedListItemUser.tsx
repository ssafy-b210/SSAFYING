import styled from "styled-components";
import userImage from "../../assets/img/user.svg";
import more from "../../assets/img/more.svg";

function FeedListItemUser() {
  return (
    <div>
      <div>
        <div>
          <Img src={userImage} />
        </div>
        <div>
          <div>UserId</div>
        </div>
      </div>
      <div>
        <Img src={more} />
      </div>
    </div>
  );
}
export default FeedListItemUser;

const Img = styled.img`
  margin: 5px;
`;
