import BackBtnHeader from "../../components/Common/BackBtnHeader";
import Chat from "../../components/DirectMessage/Chat";
import RoundImg from "../../components/Feed/utils/RoundImg";
import userImg from "../../assets/img/testImg/user.jpg"; // TEST
import styled from "styled-components";
import ExitBtn from "../../components/Common/ExitBtn";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { selecctChatList, selectChattingRoomDetail } from "../../apis/api/Chat";
import ChatHeaderProfile from "../../components/DirectMessage/ChatHeaderProfile";
import { getChattingRoomName } from "../../components/DirectMessage/util";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";
import StompJS, { CompatClient } from "@stomp/stompjs";
import { Stomp } from "@stomp/stompjs";
import { REACT_APP_HOME_URL } from "../../apis/constants";
import SockJS from "sockjs-client";

type ChattingRoomDetail = {
  id: number;
  type: string;
  joinUserInfo: [
    {
      id: number;
      nickname: string;
      profileImageUrl: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
};

type RecievedMessage = {
  id: number;
  chatRoomId: number;
  // 수신자
  userInfo: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
  message: string;
  createdAt: string;
  updatedAt: string;
};

type SendMessage = {
  userId: number;
  message: string;
};

function DirectMessageChattingRoom() {
  const SOCKET_SERVER_URL = `${REACT_APP_HOME_URL}/api/ws`; // 소켓 통신 url
  const roomId = useParams().roomId;
  const user = useAppSelector(selectUser);

  const [chattingRoomDetail, setChattingRoomDetail] =
    useState<ChattingRoomDetail>({
      id: 0,
      type: "PERSON",
      joinUserInfo: [
        {
          id: 0,
          nickname: "",
          profileImageUrl: "",
        },
      ],
      createdAt: "",
      updatedAt: "",
    });

  const [roomName, setRoomName] = useState<string>("");
  const [messages, setMessages] = useState<RecievedMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const stompClient = useRef<CompatClient | null>(null); // useRef 사용

  useEffect(() => {
    getChattingRoomDetail();
    connection();
    getChatList();
  }, []);

  // 연결
  function connection() {
    const socket = new SockJS(SOCKET_SERVER_URL);
    stompClient.current = Stomp.over(socket);
    // stompClient.debug = () => {}; // 이벤트마다 콘솔 로깅 기록 방지

    console.log("WebSocket 연결이 열렸습니다.");
    console.log(`소켓 연결을 시도합니다. 서버 주소: ${SOCKET_SERVER_URL}`);

    stompClient.current.connect({}, onConnected, onError);
  }

  // 소켓 통신 시작
  function onConnected() {
    console.log("소켓 연결 성공");

    // 구독, 메세지 수신 콜백, 에러 콜백
    if (stompClient.current) {
      stompClient.current.subscribe(
        `sub/chatting/${roomId}`,
        onMessageReceived
      );
    }
  }

  // 에러 콜백
  function onError(error: any) {
    console.log("소켓 연결 실패", error);
  }

  // 메시지 구독(수신)
  function onMessageReceived(frame: StompJS.IMessage) {
    try {
      const newMessage = JSON.parse(frame.body);
      console.log(newMessage);
      setMessages((prevMessage) => [...prevMessage, newMessage]);
    } catch (error) {
      console.error("오류가 발생했습니다:", error);
    }
  }

  // 메시지 전송
  function sendMessage() {
    if (stompClient && stompClient.current?.connected) {
      const sendMessage: SendMessage = {
        userId: user.userId,
        message: inputValue,
      };

      stompClient.current.publish({
        destination: `/pub/chatting/${roomId}`,
        body: JSON.stringify(sendMessage),
      });

      console.log("보낸 메시지", sendMessage);
      setInputValue("");
    }
  }

  // 채팅방 디테일 조회
  async function getChattingRoomDetail() {
    const res = await selectChattingRoomDetail(Number(roomId));
    setChattingRoomDetail(res);

    const name = getChattingRoomName(res.joinUserInfo, user.nickname);
    setRoomName(name);
  }

  // 채팅 메시지 리스트 조회
  async function getChatList() {
    const res = await selecctChatList(Number(roomId));
    console.log("채팅리스트", res);

    setMessages(res);
  }

  // 채팅 입력창 Change event handler
  function handleChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  // function checkContinuousMessage(
  //   message: RecievedMessage,
  //   prevMessage: RecievedMessage
  // ): boolean {
  //   if ()

  //       //         const nextChat = chatList[idx + 1];
  //       //  nextChat &&
  //       //  nextChat.userId === chat.userId &&
  //       //  nextChat.createdAt === chat.createdAt
  //       //    ? true
  //       //    : false;

  //   return true;
  // }

  return (
    <div>
      <BackBtnHeader
        backLink="/chat"
        isCenter={false}
        htext={<ChatHeaderProfile imageUrl="" name={roomName} />}
      />
      {/* {messages.map((message, index) => {
        let isContinuous: boolean = false;
        // console.log("이전 메시지", messages[index - 1]);

        // if (index > 0)
        // isContinuous = checkContinuousMessage(message, messages[index - 1]);

        return (
          <Chat
            key={message.id}
            userId={message.userInfo.id}
            message={message.message}
            isContinuous={isContinuous}
          />
        );
      })} */}
      <ChatInputBox>
        <input
          type="text"
          value={inputValue}
          onChange={handleChangeInputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        {inputValue.length > 0 ? (
          <button onClick={sendMessage}>보내기</button>
        ) : null}
      </ChatInputBox>
      {/* <button onClick={sendMessage}>채팅 보내기</button> */}
      {/* <BackBtnHeader
        backLink="/direct"
        isCenter={false}
        htext={
          <HeaderTextWrapper>
            <RoundImg size="30px" src={userImg} />
            <div className="text">su00</div>
          </HeaderTextWrapper>
        }
        extraBtn={<ExitBtn link="/direct" />}
      />
      <div>
        {chatList.map((chat, idx) => {
          const nextChat = chatList[idx + 1]; */}
      {/* 특정 유저가 같은 시간에 2개 이상의 채팅을 보낸 상황을 연속 채팅이라고
      정의합니다. 아래의 조건이 모두 만족할 때 연속 채팅이라고 판단합니다. 1.
      다음 채팅(nextChat)이 존재함 2. 현재 채팅(chat)의 작성자가 다음 채팅과
      같음 3. 현재 채팅의 작성시간이 다음 채팅과 같음 */}
      {/* const isContinuous =
            nextChat &&
            nextChat.userId === chat.userId &&
            nextChat.createdAt === chat.createdAt
              ? true
              : false;

          return (
            <Chat
              key={chat.id}
              userId={chat.userId}
              message={chat.message}
              isContinuous={isContinuous}
            />
          );
        })}
      </div>
      <ChatInputBox>
        <input type="text" onChange={chatInputChangeHandle} />
        {chatInputValue.length > 0 ? <button>보내기</button> : null}
      </ChatInputBox> */}
    </div>
  );
}

export default DirectMessageChattingRoom;

const HeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;

  .text {
    margin: 10px;
    font-weight: 600;
  }
`;

const ChatInputBox = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    padding: 10px 18px;
    font-size: 14px;
    font-family: "Noto Sans KR", "Noto Sans", sans-serif;
    border: 2px solid #ddd9e0;
    border-radius: 20px;
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 18px;
    color: #565cf8;
    font-weight: 600;
    font-family: "Noto Sans KR", "Noto Sans", sans-serif;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
