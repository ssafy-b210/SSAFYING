import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectOneUserInfo } from "../../../apis/api/User";
import { logout } from "../../../store/reducers/user";
import { selectUser } from "../../../store/reducers/user";
import FollowButton from "./FollowButton";

function ProflieSetting() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const profileUserId = Number(useParams().userId);
  const isMyProfile = useParams().userId === user.userId.toString();

  const callLogout = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      window.location.href = "/";
      try {
        // logout(1)안에는 loginId로 나중에 바꾸기
        dispatch(logout()); // logout() 함수를 dispatch 합니다.
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const callUserInfo = () => {
    try {
      // logout(1)안에는 loginId로 나중에 바꾸기
      selectOneUserInfo(1);
      navigate("/user/detail");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <StyledProfileSetting>
      {isMyProfile ? (
        <div>
          <Link to="/user/detail">
            <Button>회원정보</Button>
          </Link>
          <Link to="/">
            <Button className="danger" onClick={callLogout}>
              로그아웃
            </Button>
          </Link>
        </div>
      ) : (
        <FollowButton toUserId={profileUserId} />
      )}
    </StyledProfileSetting>
  );
}

export default ProflieSetting;

const StyledProfileSetting = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const Button = styled.button`
  margin: 0 16px;
  padding: 8px 30px;
  font-size: 14px;
  color: #000;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  font-family: "Noto Sans KR", "Noto Sans", sans-serif;

  &.danger {
    color: #fff;
    border: none;
    background-color: #ff4a4a;
  }
`;
