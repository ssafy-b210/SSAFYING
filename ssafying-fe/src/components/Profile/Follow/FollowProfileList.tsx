import FollowProfileListItem from "./FollowProfileListItem";

type FollowProfileItemProps = {
  nickname: string;
  userImageUrl: string;
};

type FollowProfileProps = {
  data: Array<FollowProfileItemProps>;
  isFollowing: boolean;
};

function FollowProfileList(props: FollowProfileProps) {
  return (
    <div>
      {props.data.map((item, index) => (
        <FollowProfileListItem
          key={index}
          isFollowing={props.isFollowing}
          nickname={item.nickname}
          userImageUrl={item.userImageUrl}
        />
      ))}
    </div>
  );
}

export default FollowProfileList;
