import styled from "styled-components";

function ProfileInfo() {
  return (
    <StyledProfileInfo>
      <div className="info-box">
        <div>54</div>
        <div>Posts</div>
      </div>
      <InfoBtn href="#" className="info-box">
        <div>834</div>
        <div>Follow</div>
      </InfoBtn>
      <InfoBtn href="#" className="info-box">
        <div>162</div>
        <div>Following</div>
      </InfoBtn>
    </StyledProfileInfo>
  );
}

const StyledProfileInfo = styled.div`
  display: flex;

  .info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const InfoBtn = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export default ProfileInfo;
