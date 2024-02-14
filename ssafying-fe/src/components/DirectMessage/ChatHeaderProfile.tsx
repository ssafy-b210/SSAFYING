import styled from "styled-components";
import RoundImg from "../Feed/utils/RoundImg";

function ChatHeaderProfile(props: { imageUrl: string; name: string }) {
  return (
    <HeaderTextWrapper>
      <RoundImg size="30px" src={props.imageUrl} />
      <div className="text">{props.name}</div>
    </HeaderTextWrapper>
  );
}

export default ChatHeaderProfile;

const HeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;

  .text {
    margin: 10px;
    font-weight: 600;
  }
`;
