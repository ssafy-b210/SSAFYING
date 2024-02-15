import styled from "styled-components";
import RoundImg from "../utils/RoundImg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeedDetail from "../../../pages/Feed/FeedDetail";

interface userProps {
  userId: number;
  nickname: string;
  imageUrl: string;
  type: string;
  time: string;
  sendId: number;
  sendNickname: string;
  feedId: number;
}

function AlarmItem({
  userId,
  imageUrl,
  nickname,
  type,
  time,
  sendId,
  sendNickname,
  feedId,
}: userProps) {
  const [timediff, setTimediff] = useState("");

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
          like: (
            <Link to={`/feed/${feedId}`} className="home">
              <RoundImg src={imageUrl} size="30px" />
              <UserDiv>{sendNickname}</UserDiv>님이 &nbsp;회원님의 게시글을
              좋아합니다.
            </Link>
          ),
          follow: (
            <Link to={`/profile/${sendId}`} className="home">
              <RoundImg src={imageUrl} size="30px" />
              <UserDiv>{sendNickname}</UserDiv>님이 &nbsp;회원님을 팔로우합니다.
            </Link>
          ),
          comment: (
            <Link to={`/feed/${feedId}`} className="home">
              <RoundImg src={imageUrl} size="30px" />
              <UserDiv>{sendNickname}</UserDiv>님이 &nbsp;회원님의 게시글에
              댓글을 남겼습니다.
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
