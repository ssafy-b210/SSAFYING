import styled from "styled-components";
import Hashtag from "../../Feed/utils/SignupHashTag";

function LifeBtn() {
  return (
    <div>
      <Options>
        <div>
          <Hashtag text="대전" />
          <Hashtag text="서울" />
          <Hashtag text="부울경" />
          <Hashtag text="구미" />
          <Hashtag text="광주" />
          <Hashtag text="맛집" />
          <Hashtag text="클라이밍" />
          <Hashtag text="키보드" />
          <Hashtag text="풋살/축구" />
          <Hashtag text="데이트" />
          <Hashtag text="옷/OOTD" />
          <Hashtag text="일상" />
          <Hashtag text="국내여행" />
          <Hashtag text="해외여행" />
          <Hashtag text="친환경" />
          <Hashtag text="캠페인" />
          <Hashtag text="노래" />
          <Hashtag text="볼링" />
          <Hashtag text="음주" />
          <Hashtag text="영화" />
          <Hashtag text="넷플릭스" />
          <Hashtag text="집콕" />
          <Hashtag text="동물" />
          <Hashtag text="썰전" />
          <Hashtag text="MBTI" />
          <Hashtag text="INTP" />
        </div>
      </Options>
    </div>
  );
}
export default LifeBtn;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1em;
  margin-right: 1em;
`;
