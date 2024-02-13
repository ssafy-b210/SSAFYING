import styled from "styled-components";
import userProfileImg from "../../../assets/img/userIcons/userProfileImg.svg";

function ProfileImageAfterEdit() {
  return (
    <FeedCreateWrapper>
      <Profile>
        <img src={userProfileImg} />
      </Profile>
    </FeedCreateWrapper>
  );
}

export default ProfileImageAfterEdit;

const FeedCreateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 10px;
`;
