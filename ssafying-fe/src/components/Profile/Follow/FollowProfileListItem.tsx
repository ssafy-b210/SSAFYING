import styled from "styled-components";
import RoundImg from "../../Feed/utils/RoundImg";
import { Link } from "react-router-dom";

type FollowProfileProps = {
  id: number;
  nickname: string;
  userImageUrl: string;
  isFollowing: boolean;
};

function FollowProfileListItem(props: FollowProfileProps) {
  return (
    <Wrapper>
      <div className="profile-container">
        <Link to="/profile">
          <RoundImg src={props.userImageUrl} size="45" />
        </Link>
        <div className="text">
          <Link to="/profile">{props.nickname}</Link>
        </div>
      </div>
      {props.isFollowing ? (
        <CancelButton
          onClick={() => {
            if (window.confirm(`${props.nickname}님을 언팔로우하시겠습니까?`)) {
              alert("언팔로우했습니다.");
            }
          }}
        >
          언팔로우
        </CancelButton>
      ) : null}
    </Wrapper>
  );
}

export default FollowProfileListItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  .profile-container {
    display: flex;
    align-items: center;
  }

  .profile-container a {
    color: #000;
    text-decoration: none;
  }

  .profile-container .text {
    padding-left: 10px;
  }
`;

const CancelButton = styled.button`
  margin: 0 10px;
  padding: 7px 12px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #f93737;
  cursor: pointer;
`;
