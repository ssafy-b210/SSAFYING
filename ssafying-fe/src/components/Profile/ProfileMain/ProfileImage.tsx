import styled from "styled-components";

function ProfileImage() {
  return (
    <StyledProfileImage>
      <div className="profile-container">
        <img
          src="https://via.assets.so/img.jpg?w=90&h=90&tc=blue&bg=#cecece"
          alt=""
        />
      </div>
    </StyledProfileImage>
  );
}

const StyledProfileImage = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  margin-right: 16px;
  box-sizing: border-box;

  .profile-container {
    position: relative;
    width: 90px;
    height: 90px;
    padding: 5px;
    border: 1px solid #c7c7cc;
    border-radius: 50%;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export default ProfileImage;
