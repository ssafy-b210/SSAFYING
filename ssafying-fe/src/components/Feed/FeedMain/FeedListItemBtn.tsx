import styled from "styled-components";
import likeBtn from "../../../assets/img/imgBtn/like.svg";
import likeFillRed from "../../../assets/img/imgBtn/likeFillRed.svg";
import commentBtn from "../../../assets/img/imgBtn/comment.svg";
import FeedLikeCnt from "./FeedLikeCnt";
import ImgBtn from "../utils/ImgBtn";
import CommentModal from "../Comment/CommentModal";
import React, { useState, useEffect } from "react";
import saveBtnBlack from "../../../assets/img/imgBtn/saveBtnBlack.svg";
import saveBtnWhite from "../../../assets/img/imgBtn/saveBtnWhite.svg";
import { scrapFeed } from "../../../apis/api/Feed";
import { cancelscrapFeed } from "../../../apis/api/Feed";
import { likeFeed } from "../../../apis/api/Feed";
import { cancelLikeFeed } from "../../../apis/api/Feed";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

interface Props {
  likeCount: number;
  feedId: number;
}

const FeedListItemBtn: React.FC<Props> = ({ likeCount, feedId }: Props) => {
  const user = useAppSelector(selectUser);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const openComment = () => {
    setModalIsOpen(true);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    const saveSaveStatus = localStorage.getItem(`savedStatus_${feedId}`);
    setIsSaved(saveSaveStatus === "true");

    const saveLikeStatus = localStorage.getItem(`likedStatus_${feedId}`);
    setIsLiked(saveLikeStatus === "true");
  }, [feedId]);

  const toggleSaved = () => {
    const newSavedStatus = !isSaved;
    setIsSaved(newSavedStatus);

    localStorage.setItem(`savedStatus_${feedId}`, String(newSavedStatus));

    if (!newSavedStatus) {
      scrapFeed(user.userId, feedId);
    } else {
      console.log("스크랩취소", user.userId);
      cancelscrapFeed(user.userId, feedId);
    }
  };

  const toggleLiked = () => {
    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);

    localStorage.setItem(`likedStatus_${feedId}`, String(newLikedStatus));
    if (!newLikedStatus) {
      likeCount++;
      likeFeed(user.userId, feedId);
    } else {
      likeCount--;
      cancelLikeFeed(user.userId, feedId);
    }
  };

  return (
    <>
      <BtnWrapper>
        <div>
          <ImgBtn
            src={isLiked ? likeFillRed : likeBtn}
            onClick={toggleLiked}
            size="20px"
          />
          <ImgBtn src={commentBtn} onClick={openComment} size="20px" />
          <ImgBtn
            src={isSaved ? saveBtnBlack : saveBtnWhite}
            onClick={toggleSaved}
            size="20px"
          />
        </div>
        <FeedLikeCnt likeCount={likeCount} />
      </BtnWrapper>
      {modalIsOpen && <CommentModal onClose={closeModal} feedId={feedId} />}
    </>
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
