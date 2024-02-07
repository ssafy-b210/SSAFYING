import FollowProfileListItem from "./FollowProfileListItem";

type FollowProfileItemProps = {
  id: number;
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
      {props.data.map((item) => (
        <FollowProfileListItem
          key={item.id}
          id={item.id}
          isFollowing={props.isFollowing}
          nickname={item.nickname}
          userImageUrl={item.userImageUrl}
        />
      ))}
    </div>
  );
}

export default FollowProfileList;
