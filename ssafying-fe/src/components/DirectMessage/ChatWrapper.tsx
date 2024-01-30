import styled from "styled-components";
import Chat from "./Chat";
import RoundImg from "../Feed/utils/RoundImg";
import userImg from "../../assets/img/testImg/user.svg";

// 프로필 사진과 말풍선을 묶는 컴포넌트입니다.

function ChatWrapper() {
  return (
    <Wrapper>
      {/* <Chat
        writer="user1"
        message="여기에 내 채팅이 표시됩니다."
        isRead={true}
      ></Chat> */}
      <RoundImg size="35px" src={userImg} />
      <Chat
        writer="user2"
        message="여기에 다른 사람의 채팅이 표시됩니다. 여기에 다른 사람의 채팅이 표시됩니다."
        isRead={true}
      ></Chat>
    </Wrapper>
  );
}

export default ChatWrapper;

const Wrapper = styled.div`
  display: flex;
`;
