import styled from "styled-components";
import Hashtag from "../../Feed/utils/SignupHashTag";
import FeedListItem from "../../Feed/FeedMain/FeedListItem";
import { useState } from "react";
import downArrow from "../../../assets/img/imgBtn/downArrow.svg";

type HashtagType = { id: number; name: string };
type HashtagArrayType = HashtagType[];

const hashtagData: HashtagArrayType = [
  {
    id: 1,
    name: "코딩",
  },
  {
    id: 2,
    name: "기획",
  },
  {
    id: 3,
    name: "웹개발",
  },
  {
    id: 4,
    name: "공통프로젝트",
  },
  {
    id: 5,
    name: "네이버",
  },
  {
    id: 6,
    name: "백엔드",
  },
  {
    id: 7,
    name: "대전맛집",
  },
  {
    id: 8,
    name: "JAVA",
  },
  {
    id: 9,
    name: "JavaScript",
  },
  {
    id: 10,
    name: "스프링",
  },
  {
    id: 11,
    name: "아주아주아주아주긴글",
  },
  {
    id: 12,
    name: "아주아주아주아주긴글22",
  },
];

function ContentFeedSection() {
  const [selectedTagList, setSelectedTagList] = useState<HashtagArrayType>([]);
  const [isShow, setIsShow] = useState<boolean>(false);

  // 해시태그 선택/해제
  function toggleSelectedTag(id: Number) {
    const selIdx = selectedTagList.findIndex((tag) => tag.id === id); // 선택한 태그인지 확인
    const copyArr = [...selectedTagList];

    // 선택하지 않은 태그이면 selectedTagList에 추가
    if (selIdx < 0) {
      const sel = hashtagData.find((data) => data.id === id);
      copyArr.push(sel as HashtagType);
    }
    // 이미 선택한 태그이면 선택 취소
    else {
      copyArr.splice(selIdx, 1);
    }

    setSelectedTagList(copyArr);
  }

  return (
    <StyledContentFeedSection>
      {/* 
        NOTE:
        1. 해시태그
        - 내가 작성했던 적이 있는 해시태그를 모두 출력한다.
          - 가능한지 물어보기
        - 화면에 보이는 해시태그는 max-height 안에서만 표시 (완료)
        - 나머지는 더보기 버튼을 누르면 보여준다. (완료)
        - 클릭하면 선택 상태가 된다. (완료)
        2. 내 포스트
        - 내가 작성한 포스트를 모두 출력한다.
        - 한 번에 최대 10개 출력한다. 무한 스크롤을 사용한다.
        - 만약 선택한 태그가 있다면 그 태그가 포함된 피드만 보여준다.
          - 가능한지 물어보기
      */}

      <HashtagList className={isShow ? "show" : "hidden"}>
        <div className="tag-list">
          {hashtagData.map((data) => (
            <HashtagWrapper
              key={data.id}
              onClick={() => toggleSelectedTag(data.id)}
            >
              <Hashtag text={data.name} />
            </HashtagWrapper>
          ))}
        </div>
        <div className="more" onClick={() => setIsShow(true)}>
          <img src={downArrow} alt="아래 화살표" />
        </div>
      </HashtagList>
      <FeedListItem />
    </StyledContentFeedSection>
  );
}

export default ContentFeedSection;
const StyledContentFeedSection = styled.div`
  margin-top: 3px;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const HashtagList = styled.div`
  position: relative;
  margin-bottom: 16px;

  &.hidden {
    max-height: 45px;
    overflow: hidden;
  }

  &.hidden .tag-list {
    max-width: calc(100% - 20px);
  }

  &.hidden .more {
    display: block;
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    right: 5px;
    cursor: pointer;
  }

  &.show .more {
    display: none;
  }

  .more img {
    width: 20px;
    height: 20px;
  }
`;

const HashtagWrapper = styled.div`
  display: inline-block;
`;
