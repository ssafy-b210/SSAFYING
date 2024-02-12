import { useEffect, useState } from "react";
import { followUser, unfollowUser } from "../../../apis/api/Follow";
import styled from "styled-components";

function FollowButton(props: {
  isFollowButton: boolean;
  fromUserId: number;
  touserId: number;
}) {
  const [buttonText, setButtonText] = useState("");
  const [currFollowState, setCurrFollowState] = useState(props.isFollowButton);

  useEffect(() => {
    setButtonText(getButtonText());
  }, [handleClickButton]);

  function getButtonText() {
    return currFollowState ? "팔로우" : "언팔로우";
  }

  async function handleClickButton() {
    // 팔로우 버튼일 경우
    if (currFollowState) {
      const msg = await followUser(props.fromUserId, props.touserId);
      if (msg !== undefined) {
        alert(msg);
        setCurrFollowState(!currFollowState);
      }
    }
    // 언팔로우 버튼일 경우
    else {
      const msg = await unfollowUser(props.touserId);
      if (msg !== undefined) {
        alert(msg);
        setCurrFollowState(!currFollowState);
      }
    }
  }

  return (
    <Wrapper $followState={currFollowState} onClick={handleClickButton}>
      {buttonText}
    </Wrapper>
  );
}

export default FollowButton;

const Wrapper = styled.button<{ $followState: boolean }>`
  padding: 10px 65px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => (props.$followState ? "#565CF8" : "#f93737")};
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;
`;
