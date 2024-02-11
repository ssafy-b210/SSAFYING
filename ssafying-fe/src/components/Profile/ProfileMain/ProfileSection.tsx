import ProfileImageContainer from "./ProfileImageContainer";
import ProfileIntroduction from "./ProfileIntroduction";
import ProfileLinkList from "./ProfileLinkList";

function ProflieSection(props: {
  profileImageUrl: string;
  intro: string;
  feedCount: number;
  followerCount: number;
  followingCount: number;
}) {
  return (
    <div>
      <ProfileImageContainer
        profileImageUrl={props.profileImageUrl}
        feedCount={props.feedCount}
        followerCount={props.followerCount}
        followingCount={props.followingCount}
      />
      <ProfileIntroduction intro={props.intro} />
      <ProfileLinkList />
    </div>
  );
}

export default ProflieSection;
