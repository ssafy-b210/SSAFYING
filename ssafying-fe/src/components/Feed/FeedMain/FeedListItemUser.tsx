import React, { useEffect, useState } from "react";
import styled from "styled-components";
import more from "../../../assets/img/imgBtn/more.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";
import Modal from "react-modal";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { deleteFeedItem } from "../../../apis/api/Feed";
import { Link } from "react-router-dom";
import ProfileImage from "../../../assets/img/userIcons/profileImage.jpg";

interface userProps {
  userImg: string;
  nickname: string;
  userId: Number;
  time: string;
  feedId: Number;
}

function FeedListItemUser({
  userImg,
  nickname,
  userId,
  time,
  feedId,
}: userProps) {
  const user = useAppSelector(selectUser);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timeDiff, setTimediff] = useState("");

  const profileImg = userImg || ProfileImage;

  useEffect(() => {
    if (time !== null && time !== undefined) {
      calcTimeDiff();
    }
  }, []);

  function clickMoreBtn() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const deleteFeed = async () => {
    await deleteFeedItem(feedId);
    window.location.reload();
  };

  function calcTimeDiff() {
    const date = new Date(time.substring(0, 19));
    const now = new Date();
    const diff = Math.abs(date.getTime() - now.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
      if (days < 7) {
        setTimediff(`${days}일 전`);
      } else {
        setTimediff(`${date}`);
      }
    } else if (hours > 0) {
      setTimediff(`${hours}시간 전`);
    } else if (minutes > 0) {
      setTimediff(`${minutes}분 전`);
    } else {
      setTimediff(`${seconds}초 전`);
    }
  }

  return (
    <UserWrapper>
      <div>
        <Link to={`/profile/${userId}`} className="home">
          <RoundImg src={profileImg} size="30px" />
        </Link>
        <Link to={`/profile/${userId}`} className="home">
          <UserId>{nickname}</UserId>
        </Link>
      </div>

      <>
        <div>
          <span>{timeDiff}</span>
          {user.userId === userId && (
            <ImgBtn src={more} onClick={clickMoreBtn} size="20px" />
          )}
        </div>
        {user.userId === userId && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <ButtonWrapper>
              <Button onClick={deleteFeed}>삭제</Button>
            </ButtonWrapper>
          </Modal>
        )}
      </>
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

  span {
    margin-right: 5px;
    font-size: 10px;
    color: gray;
  }

  a {
    text-decoration-line: none;
    color: black;
  }
`;

const UserId = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
`;

// 모달 스타일을 위한 설정
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "130px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
};

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Button = styled.button`
  background-color: transparent; 
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: lightGray;
`;
