import { Link } from "react-router-dom";
import styled from "styled-components";
import RoundImg from "../Feed/utils/RoundImg";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";
import { getChattingRoomName } from "./chatModule";
import { useEffect, useState } from "react";

type ChattingRoom = {
  id: number;
  lastMessage: string;
  roomInfo: {
    id: number;
    type: string;
    joinUserInfo: [
      {
        id: number;
        nickname: string;
        profileImageUrl: string;
      }
    ];
  };
};

function ChattingRoomListItem(room: ChattingRoom) {
  const user = useAppSelector(selectUser);

  const [roomName, setRoomName] = useState<string>("");

  useEffect(() => {
    setRoomName(getChattingRoomName(room.roomInfo.joinUserInfo, user.nickname));
  }, []);

  return (
    <Wrapper>
      <Link to={`${room.roomInfo.id}`}>
        <ProfileImg>
          <RoundImg
            size="54"
            src={room.roomInfo.joinUserInfo[0].profileImageUrl}
          />
        </ProfileImg>
        <TextWrapper>
          <div className="room-name">{roomName}</div>
          <div className="last-message">{room.lastMessage}</div>
        </TextWrapper>
      </Link>
    </Wrapper>
  );
}

export default ChattingRoomListItem;

const Wrapper = styled.div`
  margin: 10px 0;

  a {
    display: flex;
    color: #000;
    text-decoration: none;
  }

  .room-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .last-message {
    line-height: 24px;
    font-size: 14px;
    color: #9c9c9c;
  }
`;

const TextWrapper = styled.div`
  min-width: 290px;
`;

const ProfileImg = styled.div`
  margin-right: 10px;
`;
