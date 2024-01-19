import styled from "styled-components";

function ProfileImage() {
  return (
    <StyledProfileImage>
      <img
        src="https://via.assets.so/img.jpg?w=90&h=90&tc=blue&bg=#cecece"
        alt=""
      />
    </StyledProfileImage>
  );
}

const StyledProfileImage = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 50%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export default ProfileImage;
