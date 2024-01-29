import styled from "styled-components";

interface ChatProps {
  writer: string;
  message: string;
  isRead: boolean;
}

function Chat(ChatProps: ChatProps) {
  const userId = "user1";
  const isMine: boolean = ChatProps.writer === userId;

  return (
    <StyledChat>
      <div>{ChatProps.message}</div>
    </StyledChat>
  );
}

const StyledChat = styled.div`
  display: inline-block;
  padding: 16px;
  background-color: #f0efef;
  border-radius: 30px;
  max-width: calc(100% - 110px);
`;

export default Chat;
