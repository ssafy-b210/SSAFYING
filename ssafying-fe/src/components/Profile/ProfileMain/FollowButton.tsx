import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { follow, followUser, unfollowUser } from "../../../apis/api/Follow";

function FollowButton(props: { toUserId: number }) {
  const user = useAppSelector(selectUser); // 로그인한 유저 객체

  const [buttonText, setButtonText] = useState(""); // 버튼에 출력될 텍스트
  // 팔로우 버튼(false)인지, 언팔로우 버튼(true)인지 제어하는 변수
  const [currFollowState, setCurrFollowState] = useState<boolean>(true);

  // 팔로잉한 사람인지 확인하여 버튼 텍스트 설정
  useEffect(() => {
    getIsfollow();
    setButtonText(getButtonText());
  }, []);

  useEffect(() => {
    setButtonText(getButtonText());
  }, [handleClickButton]);

  // 로그인한 유저가 toUserId를 팔로우한 상태인지 확인하여 currFollowState 설정
  async function getIsfollow() {
    const res = await follow(user.userId, props.toUserId);
    if (res !== undefined) setCurrFollowState(res.data.resultData);
  }

  // 버튼 텍스트 설정하기
  function getButtonText() {
    return currFollowState ? "언팔로우" : "팔로우";
  }

  // 팔로우/언팔로우 버튼 클릭 이벤트
  async function handleClickButton() {
    // 팔로우 버튼일 경우
    if (!currFollowState) {
      const msg = await followUser(user.userId, props.toUserId);
      if (msg !== undefined) {
        alert(msg);
        setCurrFollowState(true);
      }
    }
    // 언팔로우 버튼일 경우
    else {
      const msg = await unfollowUser(props.toUserId);
      if (msg !== undefined) {
        alert(msg);
        setCurrFollowState(false);
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
  background-color: ${(props) => (props.$followState ? "#f93737" : "#565CF8")};
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;
`;
