import styled from "styled-components";
import RoundImg from "../utils/RoundImg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/img/userIcons/profileImage.jpg";

interface userProps {
  senderId: number;
  nickname: string;
  imageUrl: string;
  type: string;
  feedId: number;
  time: string;
}

function AlarmItem({
  senderId,
  imageUrl,
  nickname,
  type,
  time,
  feedId,
}: userProps) {
  const [timediff, setTimediff] = useState("");

  console.log(imageUrl);

  const profileImg = imageUrl || profileImage;

  useEffect(() => {
    if (time !== null && time !== undefined) {
      calcTimeDiff();
    }
  }, [time]);

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
      {
        {
          LIKE: (
            <Link to={`/feedhome/${feedId}`} className="home">
              <RoundImg src={profileImg} size="30px" />
              <UserDiv>{nickname}</UserDiv>님이 &nbsp;회원님의 게시글을
              좋아합니다.
            </Link>
          ),
          FOLLOW: (
            <Link to={`/profile/${senderId}`} className="home">
              <RoundImg src={profileImg} size="30px" />
              <UserDiv>{nickname}</UserDiv>님이 &nbsp;회원님을 팔로우합니다.
            </Link>
          ),
          COMMENT: (
            <Link to={`/feedhome/${feedId}`} className="home">
              <RoundImg src={profileImg} size="30px" />
              <UserDiv>{nickname}</UserDiv>님이 &nbsp;회원님의 게시글에 댓글을
              남겼습니다.
            </Link>
          ),
        }[type]
      }
      <Time>{timediff}</Time>
    </UserWrapper>
  );
}

export default AlarmItem;

const UserWrapper = styled.div`
  padding: 10px 5px;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

const UserDiv = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
`;

const Time = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-size: 10px;
  color: gray;
`;
