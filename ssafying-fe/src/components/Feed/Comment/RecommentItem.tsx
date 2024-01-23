import React from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.svg";
import more from "../../../assets/img/imgBtn/more.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";

// 아이디 받기, 댓글 아이디랑 똑같으면 삭제버튼 보이게

interface commentProps {
  commentId: string;
  userId: string;
  content: string;
}

function CommentItem({ commentId, userId, content }: commentProps) {
  function clickDeleteBtn() {
    console.log("delete comment");
  }

  return (
    <UserWrapper>
      <div>
        <RoundImg src={userImage} size="15px" />
        <div>
          <UserId>{commentId}</UserId>
          <div>{content}</div>
        </div>
      </div>
      <div>
        <ImgBtn src={more} onClick={clickDeleteBtn} size="30px" />
      </div>
    </UserWrapper>
  );
}

export default CommentItem;

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
