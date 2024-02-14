import BackBtnHeader from "../../components/Common/BackBtnHeader";
import Chat from "../../components/DirectMessage/Chat";
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
  const roomId = Number(useParams().roomId);
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

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const stompClient = useRef<CompatClient | null>(null); // useRef 사용

  useEffect(() => {
    getChattingRoomDetail();
    connection();
    getChatList();

    inputRef.current?.focus();

    return () => {
      if (stompClient && stompClient.current?.connected) {
        stompClient.current?.disconnect();
        console.log("연결을 끊습니다.");
      }
    };
  }, [roomId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 연결
  function connection() {
    if (stompClient && stompClient.current?.connected) return;

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
        `/sub/chatting/${roomId}`,
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
      console.log("수신 메시지", frame.body);
      const newMessage = JSON.parse(frame.body);
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
    const res = await selectChattingRoomDetail(roomId);
    setChattingRoomDetail(res);

    const name = getChattingRoomName(res.joinUserInfo, user.nickname);
    setRoomName(name);
  }

  // 채팅 메시지 리스트 조회
  async function getChatList() {
    const res = await selecctChatList(roomId);
    setMessages(res);
    scrollToBottom();
  }

  // 스크롤 가장 아래로 내리기
  function scrollToBottom() {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }

  // 채팅 입력창 Change event handler
  function handleChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  // 채팅방 나가기 버튼 Click event handler
  async function handleClickExitButton() {
    alert("채팅방을 나갑니다.");
    // confirm 띄우고
    // 채팅방 상세 조회 후
    // id로 삭제 API 실행
    // /chat으로 나가기
    // 구독 끊기
    // 서버 연결 끊기
  }

  // 다음 채팅과 연속되어 보냈는지 검사
  // 작성 유저, 생성 날짜, 시, 분이 같으면 true 반환
  function checkContinuousMessage(
    message: RecievedMessage,
    nextMessage: RecievedMessage | undefined
  ): boolean {
    if (!nextMessage) return false;

    const msgCreateTime = new Date(message.createdAt);
    const nextMsgCreateTime = new Date(nextMessage.createdAt);

    return (
      message.userInfo.nickname === nextMessage.userInfo.nickname &&
      msgCreateTime.getDate() === nextMsgCreateTime.getDate() &&
      msgCreateTime.getHours() === nextMsgCreateTime.getHours() &&
      msgCreateTime.getMinutes() === nextMsgCreateTime.getMinutes()
    );
  }

  return (
    <Wrapper>
      <BackBtnHeader
        backLink="/chat"
        isCenter={false}
        htext={<ChatHeaderProfile imageUrl="" name={roomName} />}
        extraBtn={<ExitBtn onClick={handleClickExitButton} />}
      />
      <ChatContainer ref={scrollRef}>
        {messages.map((message, index) => {
          let isContinuous: boolean = false;
          isContinuous = checkContinuousMessage(message, messages[index + 1]);

          return (
            <Chat
              // key={message.id}
              key={index}
              userId={message.userInfo.id}
              message={message.message}
              isContinuous={isContinuous}
            />
          );
        })}
      </ChatContainer>
      <ChatInputBox>
        <input
          ref={inputRef}
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
    </Wrapper>
  );
}

export default DirectMessageChattingRoom;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const ChatContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 78%;
  overflow-y: scroll;
  padding: 0 10px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const ChatInputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;

  input {
    width: 100%;
    height: 40px;
    padding: 10px 75px 10px 18px;
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
