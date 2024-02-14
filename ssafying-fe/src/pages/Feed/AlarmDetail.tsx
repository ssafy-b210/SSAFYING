import AlarmItemList from "../../components/Feed/Alarm/AlarmItemList";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import { getAlarmList } from "../../apis/api/Alarm";
import { useEffect, useState } from "react";

import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";

function AlarmDetail() {
  const user = useAppSelector(selectUser);
  const [alarmList, setAlarmList] = useState<any[]>([]);

  useEffect(() => {
    handleAlarmList();
  }, []);

  const handleAlarmList = async () => {
    const list = await getAlarmList(user.userId);
    console.log(list);
    setAlarmList(list || []);
  };

  return (
    <div>
      <BackBtnHeader backLink="/feedhome" text="알림" isCenter={true} />
      <AlarmItemList alarmList={alarmList} />
    </div>
  );
}
export default AlarmDetail;
