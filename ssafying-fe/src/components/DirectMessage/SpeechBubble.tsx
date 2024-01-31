import styled from "styled-components";

// 채팅 말풍선 컴포넌트입니다.

interface ChatProps {
  userId: string;
  message: string;
  isMine: boolean;
}

function SpeechBubble(props: ChatProps) {
  return (
    <Wrapper $isMine={props.isMine}>
      <StyledSpeechBubble $isMine={props.isMine}>
        <div>{props.message}</div>
      </StyledSpeechBubble>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $isMine: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isMine ? "flex-end" : "flex-start")};
  width: 100%;
  margin-bottom: 5px;
`;

const StyledSpeechBubble = styled.div<{ $isMine: boolean }>`
  display: inline-block;
  max-width: 70%;
  margin: 0 5px;
  padding: 10px 16px;
  font-size: 14px;
  word-break: break-word;
  border-radius: 20px;
  background-color: ${(props) => (props.$isMine ? "#fdfdfd" : "#ffefff")};
`;

export default SpeechBubble;
