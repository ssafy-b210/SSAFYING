import styled from "styled-components";

function ProfileIntroduction(props: { intro: string }) {
  return (
    <StyledProfileIntroduction>
      <div>{props.intro}</div>
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
