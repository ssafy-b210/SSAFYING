import styled from "styled-components";
import AlarmItem from "./AlarmItem";

interface userProps {
  alarmList: {
    userId: string;
    userImage: string;
    type: string;
  }[];
}

function AlarmItemList({ alarmList }: userProps) {
  return (
    <>
      {alarmList.map((alarm) => (
        <AlarmItem
          key={alarm.userId}
          userId={alarm.userId}
          userImage={alarm.userImage}
          type={alarm.type}
        />
      ))}
    </>
  );
}

export default AlarmItemList;
