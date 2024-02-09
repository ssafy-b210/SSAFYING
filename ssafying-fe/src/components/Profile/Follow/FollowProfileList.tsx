import FollowProfileListItem from "./FollowProfileListItem";

type FollowProfileType = {
  id: number;
  nickname: string;
  profileImageUrl: string;
};

function FollowProfileList(props: {
  data: FollowProfileType[];
  isFollowing: boolean;
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
        />
      ))}
    </div>
  );
}

export default FollowProfileList;
