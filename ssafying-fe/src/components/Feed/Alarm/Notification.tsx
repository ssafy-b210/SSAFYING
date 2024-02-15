import React, { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

function Notification() {
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (user.isLoggedIn) {
      const eventSource = new EventSource(
        `http://localhost:8081/api/notifications/subscribe/${user.userId}`
      );

      eventSource.onopen = async () => {
        console.log("SSE connection opened!");
      };

      eventSource.addEventListener("like", (event) => {
        console.log("like", event.data);
        const data = JSON.parse(event.data);
        console.log(data);
      });

      eventSource.addEventListener("follow", (event) => {
        console.log("follow", event.data);
        const data = JSON.parse(event.data);
        console.log(data);
      });

      eventSource.addEventListener("comment", (event) => {
        console.log("comment", event.data);
        const data = JSON.parse(event.data);
        console.log(data);
      });

      return () => {
        eventSource.close();
      };
    }
  }, [user.isLoggedIn]);

  return (
    <div>{/* 여기에 알림을 보여주는 UI 코드를 추가할 수 있습니다. */}</div>
  );
}

export default Notification;
