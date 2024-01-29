import Chat from "./Chat";

function ChatWrapper() {
  return (
    <div>
      <Chat
        writer="user1"
        message="여기에 내 채팅이 표시됩니다."
        isRead={true}
      ></Chat>
      {/* <MyChat text="여기에 내 채팅이 표시됩니다. 여기에 내 채팅이 표시됩니다. 여기에 내 채팅이 표시됩니다." /> */}
      {/* <OtherChat text="여기에 다른 사람의 채팅이 표시됩니다." /> */}
    </div>
  );
}

export default ChatWrapper;
