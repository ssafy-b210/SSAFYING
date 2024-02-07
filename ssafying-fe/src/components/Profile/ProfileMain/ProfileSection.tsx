import ProfileImageContainer from "./ProfileImageContainer";
import ProfileIntroduction from "./ProfileIntroduction";
import ProfileLinkList from "./ProfileLinkList";

function ProflieSection(props: { profileImageUrl: string; intro: string }) {
  return (
    <div>
      <ProfileImageContainer profileImageUrl={props.profileImageUrl} />
      <ProfileIntroduction intro={props.intro} />
      <ProfileLinkList />
    </div>
  );
}

export default ProflieSection;
