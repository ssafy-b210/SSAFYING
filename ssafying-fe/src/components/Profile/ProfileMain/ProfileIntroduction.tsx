import styled from "styled-components";

function ProfileIntroduction() {
  return (
    <StyledProfileIntroduction>
      {`이애옹이올시다\n싸피 10기 팀제주도 팀장이라구요\naeong123@github.com`}
    </StyledProfileIntroduction>
  );
}

export default ProfileIntroduction;

const StyledProfileIntroduction = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  white-space: pre-wrap;

  @media screen and (min-width: 500px) {
    margin-left: 45px;
  }
`;
