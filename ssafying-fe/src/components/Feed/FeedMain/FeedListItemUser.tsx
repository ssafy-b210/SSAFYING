import React from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/user.svg";
import more from "../../../assets/img/more.svg";

function FeedListItemUser() {
  return (
    <UserWrapper>
      <div>
        <Img src={userImage} />
        <UserId>aeong123</UserId>
      </div>
      <div>
        <Img src={more} />
      </div>
    </UserWrapper>
  );
}

export default FeedListItemUser;

const Img = styled.img`
  margin: 5px;
  border-radius: 50%;
`;

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
  font-family: "Inter", sans-serif; /* Apply Inter font */
  font-weight: bold;
`;
