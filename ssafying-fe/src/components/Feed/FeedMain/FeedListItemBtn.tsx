import styled from "styled-components";
import likeBtn from "../../../assets/img/imgBtn/like.svg";
import saveBtn from "../../../assets/img/imgBtn/save.svg";
import commentBtn from "../../../assets/img/imgBtn/comment.svg";
import FeedLikeCnt from "./FeedLikeCnt";
import ImgBtn from "../utils/ImgBtn";
import CommentModal from "../Comment/CommentModal";
import React, { useState } from "react";

const FeedListItemBtn: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const clickLikeBtn = () => {};

  const openComment = () => {
    setModalOpen(true);
  };

  const closeComment = () => {
    setModalOpen(false);
  };

  const clickSaveBtn = () => {};

  return (
    <BtnWrapper>
      <div>
        {/* Assume ImgBtn component receives and forwards the onClick prop */}
        <ImgBtn src={likeBtn} onClick={clickLikeBtn} />
        <ImgBtn src={commentBtn} onClick={openComment} />
        <ImgBtn src={saveBtn} onClick={clickSaveBtn} />
      </div>
      <FeedLikeCnt />
      {modalOpen && <CommentModal onClose={closeComment} />}
    </BtnWrapper>
  );
};

export default FeedListItemBtn;

const BtnWrapper = styled.div`
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;
