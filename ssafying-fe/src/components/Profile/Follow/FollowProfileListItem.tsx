import styled from "styled-components";
import RoundImg from "../../Feed/utils/RoundImg";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/img/userIcons/profileImage.jpg";

type FollowProfileProps = {
  id: number;
  nickname: string;
  userImageUrl: string;
  isFollowing: boolean;

  // 언팔로우 버튼 클릭 이벤트 함수
  onClickUnfollowButton?: (
    targetUserId: number,
    targetUserNickname: string
  ) => void;
};

function FollowProfileListItem(props: FollowProfileProps) {
  function unfollow() {
    if (props.onClickUnfollowButton !== undefined)
      props.onClickUnfollowButton(props.id, props.nickname);
  }

  const profile = props.userImageUrl || profileImage;

  return (
    <Wrapper>
      <div className="profile-container">
        <Link to={`/profile/${props.id}`}>
          <RoundImg src={profile} size="45" />
        </Link>
        <div className="text">
          <Link to={`/profile/${props.id}`}>{props.nickname}</Link>
        </div>
      </div>
      {props.isFollowing ? (
        <CancelButton onClick={unfollow}>언팔로우</CancelButton>
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
