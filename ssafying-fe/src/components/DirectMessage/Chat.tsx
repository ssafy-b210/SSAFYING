import styled from "styled-components";

// 채팅 말풍선 컴포넌트입니다.

interface ChatProps {
  writer: string;
  message: string;
  isRead: boolean;
}

function Chat(ChatProps: ChatProps) {
  const userId = "user1";
  const isMine = ChatProps.writer === userId;

  return (
    <Wrapper $isMine={isMine}>
      <StyledChat $isMine={isMine}>
        <div>{ChatProps.message}</div>
      </StyledChat>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $isMine: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isMine ? "flex-end" : "flex-start")};
  width: 100%;
`;

const StyledChat = styled.div<{ $isMine: boolean }>`
  display: inline-block;
  max-width: 70%;
  margin: 0 5px;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 30px;
  background-color: ${(props) => (props.$isMine ? "#f0efef" : "#D9D9D9")};
`;

export default Chat;
