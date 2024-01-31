import styled from "styled-components";
import Hashtag from "../../Feed/utils/SignupHashTag";

function WorkBtn() {
  return (
    <div>
      <Options>
        <div>
          <Hashtag text="프론트개발" />
          <Hashtag text="백엔드개발" />
          <Hashtag text="앱개발" />
          <Hashtag text="임베디드개발" />
          <Hashtag text="서버개발" />
          <Hashtag text="인프라" />
          <Hashtag text="최신개발소식" />
          <Hashtag text="공통프로젝트" />
          <Hashtag text="네카라쿠배" />
          <Hashtag text="Java" />
          <Hashtag text="Python" />
          <Hashtag text="Vue" />
          <Hashtag text="React" />
          <Hashtag text="C++" />
          <Hashtag text="C" />
          <Hashtag text="Go" />
          <Hashtag text="TypeScript" />
          <Hashtag text="JavaScript" />
          <Hashtag text="CS스터디" />
          <Hashtag text="면접스터디" />
          <Hashtag text="PM" />
          <Hashtag text="삼성" />
          <Hashtag text="역량평가" />
          <Hashtag text="코딩테스트" />
          <Hashtag text="개발중" />
        </div>
      </Options>
    </div>
  );
}
export default WorkBtn;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1em;
  margin-right: 1em;
`;
