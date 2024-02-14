import AlarmItem from "./AlarmItem";

interface userProps {
  alarmList: {
    receiverId: number;
    nickname: string;
    imageUrl: string;
    type: string;
    createdAt: string;
    sendId: number;
    sendNickname: string;
    feedId: number;
  }[];
}

function AlarmItemList({ alarmList }: userProps) {
  return (
    <>
      {alarmList.map((alarm) => (
        <AlarmItem
          key={alarm.receiverId}
          userId={alarm.receiverId}
          nickname={alarm.nickname}
          imageUrl={alarm.imageUrl}
          time={alarm.createdAt}
          type={alarm.type}
          sendId={alarm.sendId}
          sendNickname={alarm.sendNickname}
          feedId={alarm.feedId}
        />
      ))}
    </>
  );
}

export default AlarmItemList;
