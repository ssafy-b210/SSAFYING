import styled from "styled-components";
import Hashtag from "../../Feed/utils/HashTag";

function OptionsBtn() {
  return (
    <div>
      <Options>
        <div>
          <Hashtag text="프론트" />
          <Hashtag text="대전" />
          <Hashtag text="공통프로젝트" />
          <Hashtag text="맛집" />
          <Hashtag text="클라이밍" />
          <Hashtag text="부울경캠퍼스" />
          <Hashtag text="네카라쿠배" />
          <Hashtag text="카카오" />
        </div>
      </Options>
    </div>
  );
}
export default OptionsBtn;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1em;
  margin-right: 1em;
`;
