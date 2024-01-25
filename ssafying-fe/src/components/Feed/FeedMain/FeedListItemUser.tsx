import React from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import more from "../../../assets/img/imgBtn/more.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";

function FeedListItemUser() {
  function clickMoreBtn() {
    console.log("clickMoreBtn");
  }

  return (
    <UserWrapper>
      <div>
        <RoundImg src={userImage} size="30px" />
        <UserId>aeong123</UserId>
      </div>
      <div>
        <ImgBtn src={more} onClick={clickMoreBtn} size="20px" />
      </div>
    </UserWrapper>
  );
}

export default FeedListItemUser;

const UserWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

const UserId = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
`;
