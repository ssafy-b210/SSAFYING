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
    margin-right: 10px;
    padding: 10px;
    font-weight: bold;
    box-sizing: border-box;
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
