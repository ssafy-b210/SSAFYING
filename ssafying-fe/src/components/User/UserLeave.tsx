import styled from "styled-components";
import userLeaveCheck from "../../assets/img/userIcons/userleave.svg";

function UserLeave() {
  return (
    <UserLeaveMsg>
      <img src={userLeaveCheck} />
      <p>회원탈퇴가 정상적으로 처리되었습니다</p>
      <p>2주 안으로 로그인 시, 탈퇴 취소를 철회합니다.</p>
    </UserLeaveMsg>
  );
}
export default UserLeave;

const UserLeaveMsg = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 50%;

  img {
    width: 100px;
    margin-bottom: 3em;
  }
  p {
    font-weight: bold;
  }
`;
