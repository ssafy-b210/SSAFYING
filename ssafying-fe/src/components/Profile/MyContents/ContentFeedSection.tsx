import styled from "styled-components";
import Hashtag from "../../Feed/utils/SignupHashTag";
import downArrow from "../../../assets/img/imgBtn/downArrow.svg";
import { useEffect, useState } from "react";
import { selectHashtagList, selectMyFeedList } from "../../../apis/api/Profile";
import { useParams } from "react-router";
import FeedListItem from "../../Feed/FeedMain/FeedListItem";

type HashtagType = { id: number; tagName: string };

function ContentFeedSection() {
  // 전체 내 피드 리스트
  const [allMyFeedList, setAllMyFeedList] = useState([]);
  // 화면에 보여줄 내 피드 리스트
  const [myFeedList, setMyFeedList] = useState<any[]>([]);
  // 해시 태그 리스트
  const [hashtagList, setHashTagList] = useState<HashtagType[]>([]);

  // 선택한 해시태그 리스트
  const [selectedTagList, setSelectedTagList] = useState<HashtagType[]>([]);
  // 해시태그 접기 버튼 여부
  const [isShow, setIsShow] = useState<boolean>(false);

  const profileUserId = useParams().userId; // 현재 마이페이지의 유저 id

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
    else copyArr.splice(selIdx, 1);

    setSelectedTagList(copyArr);
  }

  // 해시태그 리스트 가져오기
  async function getHashtagList() {
    const res = await selectHashtagList(Number(profileUserId));
    if (res !== undefined) {
      setHashTagList(res.data.resultData);
    }
  }

  // 내가 작성한 모든 피드 리스트 가져오기
  async function getAllMyFeedList() {
    const res = await selectMyFeedList(Number(profileUserId));
    if (res !== undefined) {
      setAllMyFeedList(res.data.resultData);
      setMyFeedList(res.data.resultData);
    }
  }

  // 선택한 해시태그만 포함된 내가 작성한 피드 리스트 가져오기
  function filterMyFeedList() {
    // 선택한 해시태그가 없을 경우 전체 리스트 보여주기
    if (selectedTagList.length === 0) {
      setMyFeedList(allMyFeedList);
      return;
    }

    // 선택한 태그가 있는 게시물만 보여주기
    const tempArr: any[] = [];

    allMyFeedList.forEach((item: any) => {
      const feedTags = item.feedTags;

      for (const tag of feedTags) {
        const isIncluded = selectedTagList.some(
          (el) => el.tagName === tag.tagName
        );

        if (isIncluded) {
          tempArr.push(item);
          break;
        }
      }
    });

    setMyFeedList(tempArr);
  }

  useEffect(() => {
    getHashtagList();
    getAllMyFeedList();
  }, []);

  useEffect(() => {
    filterMyFeedList();
  }, [selectedTagList]);

  return (
    <div>
      <HashtagList className={isShow ? "show" : "hidden"}>
        <div className="tag-list">
          {hashtagList.map((data) => (
            <HashtagWrapper
              key={data.id}
              onClick={() => toggleSelectedTag(data.id)}
            >
              <Hashtag text={data.tagName} />
            </HashtagWrapper>
          ))}
        </div>
        <div className="more" onClick={() => setIsShow(true)}>
          <img src={downArrow} alt="아래 화살표" />
        </div>
      </HashtagList>
      {myFeedList.map((data: any) => (
        <FeedListItem key={data.id} feed={data} />
      ))}
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
