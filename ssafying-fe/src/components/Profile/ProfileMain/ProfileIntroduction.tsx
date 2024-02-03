import styled from "styled-components";

function ProfileIntroduction() {
  const data = {
    intro:
      "이애옹이올시다\n싸피 10기 팀제주도 팀장이라구요\naeong123@github.com",
  };

  return (
    <StyledProfileIntroduction>
      <div>{data.intro}</div>
      {/* TODO : 포트폴리오 링크 추가 */}
    </StyledProfileIntroduction>
  );
}

export default ProfileIntroduction;

const StyledProfileIntroduction = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  font-size: 14px;
  white-space: pre-wrap;
  width: 100%;
  box-sizing: border-box;

  @media screen and (min-width: 500px) {
    padding-left: 32px;
  }
`;
