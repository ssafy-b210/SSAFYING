import styled from "styled-components";
import { useEffect, useState } from "react";
import CenterHeader from "../../components/Common/CenterHeader";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";
import { selectChattingRoomList } from "../../apis/api/Chat";
import ChattingRoomListItem from "../../components/DirectMessage/ChattingRoomListItem";
import PlusBtn from "../../components/Common/PlusBtn";

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

function DirectMessageChats() {
  const user = useAppSelector(selectUser);
  const [chattingRoomList, setChattingRoomList] = useState<ChattingRoom[]>([]);

  useEffect(() => {
    getChattingRoomList();
  }, []);

  // 모든 채팅방 목록 조회
  async function getChattingRoomList(): Promise<void> {
    const res: ChattingRoom[] = await selectChattingRoomList(user.userId);
    setChattingRoomList(res);
  }

  function handleClickCreate(): void {
    // 채팅방 생성
  }

  return (
    <div>
      <CenterHeader />
      <BackBtnHeader
        backLink="/"
        isCenter={true}
        text={user.nickname}
        extraBtn={<PlusBtn onClick={handleClickCreate} />}
      />
      <ProfileList>
        {chattingRoomList.map((room: ChattingRoom) => (
          <ChattingRoomListItem
            key={room.id}
            id={room.id}
            lastMessage={room.lastMessage}
            roomInfo={room.roomInfo}
          />
        ))}
      </ProfileList>
    </div>
  );
}

export default DirectMessageChats;

const ProfileList = styled.div`
  padding: 12px;
`;
