import BackBtnHeader from "../../components/Common/BackBtnHeader";
import Chat from "../../components/DirectMessage/Chat";
import RoundImg from "../../components/Feed/utils/RoundImg";
import userImg from "../../assets/img/testImg/user.svg"; // TEST
import styled from "styled-components";
import ExitBtn from "../../components/Common/ExitBtn";
import { ChangeEvent, useState } from "react";

function DirectMessageChattingRoom() {
  const chatList = [
    {
      id: "1",
      userId: "user2",
      message: "안녕하세요!",
      isRead: true,
      createdAt: "2024-01-31 10:00:00",
    },
    {
      id: "2",
      userId: "user1",
      message: "안녕하세요~",
      isRead: true,
      createdAt: "2024-01-31 10:03:00",
    },
    {
      id: "3",
      userId: "user2",
      message:
        "알고리즘 스터디 가입하고 싶어요. 이렇게 길어지면 어떻게 나올까?",
      isRead: true,
      createdAt: "2024-01-31 10:05:00",
    },
    {
      id: "4",
      userId: "user2",
      message: "스터디 장소는 어디인가요?",
      isRead: true,
      createdAt: "2024-01-31 10:05:00",
    },
    {
      id: "5",
      userId: "user2",
      message: "채팅 친 지 시간이 1분 지났어요.",
      isRead: true,
      createdAt: "2024-01-31 10:06:00",
    },
    {
      id: "6",
      userId: "user1",
      message: "유온역에서 진행하고 있어요~",
      isRead: false,
      createdAt: "2024-01-31 10:30:00",
    },
  ];

  const [chatInputValue, setChatInputValue] = useState("");

  function chatInputChangeHandle(e: ChangeEvent<HTMLInputElement>) {
    setChatInputValue(e.target.value);
  }

  return (
    <div>
      <BackBtnHeader
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
          const nextChat = chatList[idx + 1];

          /*
          특정 유저가 같은 시간에 2개 이상의 채팅을 보낸 상황을 연속 채팅이라고 정의합니다.
          
          아래의 조건이 모두 만족할 때 연속 채팅이라고 판단합니다.
          1. 다음 채팅(nextChat)이 존재함
          2. 현재 채팅(chat)의 작성자가 다음 채팅과 같음
          3. 현재 채팅의 작성시간이 다음 채팅과 같음
          */
          const isContinuous =
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
      </ChatInputBox>
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
