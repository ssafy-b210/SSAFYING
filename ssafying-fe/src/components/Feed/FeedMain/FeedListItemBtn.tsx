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
import {
  scrapFeed,
  cancelscrapFeed,
  likeFeed,
  cancelLikeFeed,
} from "../../../apis/api/Feed";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { getFeedLikeList, getIsScrapped } from "../../../apis/api/Feed";

interface Props {
  likeCount: number;
  feedId: number;
}

const FeedListItemBtn: React.FC<Props> = ({
  likeCount: initialLikeCount,
  feedId,
}: Props) => {
  const user = useAppSelector(selectUser);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  const openComment = () => {
    setModalIsOpen(true);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  const toggleLiked = async () => {
    const b = await getFeedLikeList(feedId, user.userId);
    setIsLiked(b);
  };

  const toggleSaved = async () => {
    const s = await getIsScrapped(user.userId, feedId);
    console.log(s);
    setIsSaved(s);
  };

  useEffect(() => {
    toggleLiked();
    toggleSaved();
  }, []);

  useEffect(() => {
    const saveSaveStatus = localStorage.getItem(`savedStatus_${feedId}`);
    setIsSaved(saveSaveStatus === "true");
  }, [feedId]);

  const likePlus = async () => {
    try {
      await likeFeed(user.userId, feedId);
      setLikeCount((prevCount) => prevCount + 1);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const likeMinus = async () => {
    try {
      await cancelLikeFeed(user.userId, feedId);
      setLikeCount((prevCount) => prevCount - 1);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const saveFeed = async () => {
    try {
      await scrapFeed(user.userId, feedId);
      setIsSaved(true);
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  const saveCancel = async () => {
    try {
      await cancelscrapFeed(user.userId, feedId);
      setIsSaved(false);
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  return (
    <>
      <BtnWrapper>
        <div>
          <LikeWrapper>
            {isLiked ? (
              <ImgBtn src={likeFillRed} onClick={likeMinus} size="20px" />
            ) : (
              <ImgBtn src={likeBtn} onClick={likePlus} size="20px" />
            )}

            {/* <div>{likeCount}</div> */}
          </LikeWrapper>
          <ImgBtn src={commentBtn} onClick={openComment} size="20px" />
          {isSaved ? (
            <ImgBtn src={saveBtnBlack} onClick={saveCancel} size="20px" />
          ) : (
            <ImgBtn src={saveBtnWhite} onClick={saveFeed} size="20px" />
          )}
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

const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  div {
    padding: 0;
    margin: 0;
  }
`;
