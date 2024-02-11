import { MouseEvent } from "react";
import FollowProfileListItem from "./FollowProfileListItem";

type FollowProfileType = {
  id: number;
  nickname: string;
  profileImageUrl: string;
};

function FollowProfileList(props: {
  data: FollowProfileType[];
  isFollowing: boolean;

  // 언팔로우 버튼 클릭 이벤트 함수
  onClickUnfollowButton?: (
    targetUserId: number,
    targetUserNickname: string
  ) => void;
}) {
  return (
    <div>
      {props.data.map((item) => (
        <FollowProfileListItem
          key={item.id}
          id={item.id}
          isFollowing={props.isFollowing}
          nickname={item.nickname}
          userImageUrl={item.profileImageUrl}
          onClickUnfollowButton={props.onClickUnfollowButton}
        />
      ))}
    </div>
  );
}

export default FollowProfileList;
