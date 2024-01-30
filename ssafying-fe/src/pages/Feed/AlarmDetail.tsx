import AlarmItemList from "../../components/Feed/Alarm/AlarmItemList";
import BackBtnHeader from "../../components/Common/BackBtnHeader";

function AlarmDetail() {
  return (
    <div>
      <BackBtnHeader backLink="/feedhome" text="알림" isCenter={true} />
      <AlarmItemList
        alarmList={[
          {
            userId: "aeong",
            userImage:
              "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
            type: "like",
          },
          {
            userId: "aeong2",
            userImage:
              "https://image.utoimage.com/preview/cp872722/2018/06/201806010732_206.jpg",
            type: "follow",
          },
          {
            userId: "yes",
            userImage:
              "https://image.utoimage.com/preview/cp872722/2018/06/201806010732_206.jpg",
            type: "comment",
          },
        ]}
      />
    </div>
  );
}
export default AlarmDetail;
