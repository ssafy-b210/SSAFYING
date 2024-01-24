import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import more from "../../../assets/img/imgBtn/more.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";

function UserItem() {
  function clickMoreBtn() {
    console.log("clickMoreBtn");
  }

  return (
    <UserWrapper>
      <RoundImg src={userImage} size="30px" />
      <UserId>aeong123</UserId>
    </UserWrapper>
  );
}

export default UserItem;

const UserWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserId = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
`;
