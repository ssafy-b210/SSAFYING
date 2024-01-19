import styled from "styled-components";

function ProfileIntroduction() {
  return (
    <StyledProfileIntroduction>{`이애옹이올시다\n싸피 10기 팀제주도 팀장이라구요\naeong123@github.com`}</StyledProfileIntroduction>
  );
}

const StyledProfileIntroduction = styled.div`
  white-space: pre-wrap;
`;

export default ProfileIntroduction;
