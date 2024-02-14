import styled from "styled-components";
import SpeechBubble from "./SpeechBubble";
import RoundImg from "../Feed/utils/RoundImg";
import userImg from "../../assets/img/testImg/user.jpg"; // TEST
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";

// 프로필 사진과 말풍선을 묶는 컴포넌트입니다.

// 프로필이 생기지 않는 경우
// 1. 현재 유저의 채팅인 경우
// 2. 현재 유저의 채팅이 아니고, 그 채팅이 연속된 채팅일 경우

// 연속된 채팅이 아닌 경우, margin-bottom을 추가합니다.

interface ChatProps {
  userId: number;
  message: string;
  isContinuous: boolean;
}

function Chat(props: ChatProps) {
  const userId = Number(useAppSelector(selectUser).userId);
  const isMine = props.userId === userId;

  return (
    <Wrapper $isContinuous={props.isContinuous}>
      <ProfileImgWrapper>
        {isMine || (!isMine && props.isContinuous) ? null : (
          <RoundImg size="36px" src={userImg} />
        )}
      </ProfileImgWrapper>
      <SpeechBubble
        userId={props.userId}
        message={props.message}
        isMine={props.userId === userId}
      />
    </Wrapper>
  );
}

export default Chat;

const Wrapper = styled.div<{ $isContinuous: boolean }>`
  display: flex;
  margin-bottom: ${(props) => (props.$isContinuous ? "0" : "16px")};
`;

const ProfileImgWrapper = styled.div`
  width: 36px;
  flex-basis: 50px;
`;
