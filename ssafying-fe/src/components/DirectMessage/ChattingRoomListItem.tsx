import { Link } from "react-router-dom";
import styled from "styled-components";
import RoundImg from "../Feed/utils/RoundImg";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";

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

  function getAllJoinUserNickname() {
    let text = "";

    // 채팅방 유저 이름 나열 텍스트 getter
    for (let i = 0; i < room.roomInfo.joinUserInfo.length; i++) {
      const nickname = room.roomInfo.joinUserInfo[i].nickname;

      // 내 닉네임은 나오지 않도록
      if (nickname === user.nickname) continue;

      // 닉네임 나열
      if (text.length === 0) text += nickname;
      else text += ", " + nickname;
    }

    return text;
  }

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
          <div className="join-users">{getAllJoinUserNickname()}</div>
          <div className="last-message">{room.lastMessage}</div>
        </TextWrapper>
        {/* <ProfileImg>
          <RoundImg size="54px" src="" />
        </ProfileImg>
        <div>
          <div>{chat.name}</div>
          <div className="preview-text">{chat.message}</div>
        </div> */}
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

  .join-users {
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
