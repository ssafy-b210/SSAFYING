import styled from "styled-components";
import Hashtag from "../../Feed/utils/SignupHashTag";
import FeedList from "../../Feed/FeedMain/FeedList";
import { useEffect, useState } from "react";
import downArrow from "../../../assets/img/imgBtn/downArrow.svg";
import { selectHashtagList } from "../../../apis/api/Profile";
import { useParams } from "react-router";

type HashtagType = { id: number; name: string };
type HashtagArrayType = HashtagType[];

function ContentFeedSection() {
  const [selectedTagList, setSelectedTagList] = useState<HashtagArrayType>([]);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [hashtagList, setHashTagList] = useState<HashtagType[]>([]);

  const profileUserId = useParams().userId;

  // 해시태그 선택/해제
  function toggleSelectedTag(id: Number) {
    const selIdx = selectedTagList.findIndex((tag) => tag.id === id); // 선택한 태그인지 확인
    const copyArr = [...selectedTagList];

    // 선택하지 않은 태그이면 selectedTagList에 추가
    if (selIdx < 0) {
      const sel = hashtagList.find((data) => data.id === id);
      copyArr.push(sel as HashtagType);
    }
    // 이미 선택한 태그이면 선택 취소
    else {
      copyArr.splice(selIdx, 1);
    }

    setSelectedTagList(copyArr);
  }

  // 해시태그 리스트 가져오기
  async function getHashtagList() {
    const res = await selectHashtagList(Number(profileUserId));
    if (res !== undefined) setHashTagList(res.data.resultData);
  }

  useEffect(() => {
    getHashtagList();
  });

  return (
    <div>
      {/* 
        NOTE: 해시태그 리스트 높이가 45px 이상일 때 isShow=false 시키기
        NOTE : 피드 리스트 10개씩 가져오기
      */}
      <HashtagList className={isShow ? "show" : "hidden"}>
        <div className="tag-list">
          {hashtagList.map((data) => (
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
      <FeedList />
    </div>
  );
}

export default ContentFeedSection;

const HashtagList = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 0 10px;

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
