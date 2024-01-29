import styled from "styled-components";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import { MouseEvent, useState } from "react";
import DirectMessageChats from "./DirectMessageChats";
import DirectMessageRooms from "./DirectMessageRooms";

function DirectMessage() {
  const userName = "aeong123";

  /*
  버튼 정보 리스트
  name : content state에 저장되는 값
  text : html에 출력되는 값
  */
  const contentNameList = [
    {
      name: "chat",
      text: "Chats",
    },
    {
      name: "room",
      text: "Rooms",
    },
  ];

  const [content, setContent] = useState<string>("chat");

  // 클릭한 버튼의 name으로 state 값 저장
  function switchContent(e: MouseEvent<HTMLButtonElement>) {
    setContent((e.target as HTMLButtonElement).name);
  }

  return (
    <div>
      <BackBtnHeader backLink="/" text={userName} isCenter={true} />
      <ContentBtnWrapper>
        {contentNameList.map((item, index) => (
          <button
            key={index}
            name={item.name}
            className={content === item.name ? "active" : ""}
            onClick={switchContent}
          >
            {item.text}
          </button>
        ))}
      </ContentBtnWrapper>
      <ContentListWrapper>
        {content === "chat" ? <DirectMessageChats /> : <DirectMessageRooms />}
      </ContentListWrapper>
    </div>
  );
}

export default DirectMessage;

const ContentBtnWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    flex: 1;
    padding: 10px;
    font-size: 100%;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  button.active {
    border-bottom: 2px solid black;
  }
`;

const ContentListWrapper = styled.div`
  padding: 10px;
`;
