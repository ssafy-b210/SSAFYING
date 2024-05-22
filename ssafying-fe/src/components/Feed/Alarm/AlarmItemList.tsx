import AlarmItem from "./AlarmItem";

interface userProps {
  alarmList: {
    senderId: number;
    nickname: string;
    imgUrl: string;
    type: string;
    createdAt: string;
    feedId: number;
  }[];
}

function AlarmItemList({ alarmList }: userProps) {
  return (
    <>
      {alarmList.map((alarm, index) => (
        <AlarmItem
          key={index}
          senderId={alarm.senderId}
          nickname={alarm.nickname}
          imageUrl={alarm.imgUrl}
          time={alarm.createdAt}
          type={alarm.type}
          feedId={alarm.feedId}
        />
      ))}
    </>
  );
}

export default AlarmItemList;
