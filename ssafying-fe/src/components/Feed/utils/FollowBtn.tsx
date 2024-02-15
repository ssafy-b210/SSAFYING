import styled from "styled-components";
import { followUser } from "../../../apis/api/Follow";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

interface Props {
  userId: number;
}

function FollowBtn({ userId }: Props) {
  const user = useAppSelector(selectUser); // 로그인한 유저 객체
  async function handleClickButton() {
    await followUser(user.userId, userId);
    alert("팔로우 되었습니다.");
    window.location.reload();
  }
  return <BtnWrapper onClick={handleClickButton}>팔로우</BtnWrapper>;
}

export default FollowBtn;

const BtnWrapper = styled.button`
  font-family: "Noto Sans KR", "Noto Sans", sans-serif;
  background-color: #fff4f9;
  border: none;
  border-radius: 5px;
  padding: 3px 10px;
  text-align: center;
  min-width: 40px;
  margin-top: 5px;
  font-size: 12px;
  cursor: pointer;
  color: gray;
`;
