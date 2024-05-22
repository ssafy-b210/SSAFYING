import React, { useState } from "react";
import styled from "styled-components";
import Hashtag from "../../Feed/utils/SignupHashTag";

interface WorkBtnProps {
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTags: string[];
}

function WorkBtn({ setSelectedTags, selectedTags }: WorkBtnProps) {
  const handleTagSelect = (value: string) => {
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== value));
    } else {
      setSelectedTags([...selectedTags, value]);
    }
  };
  return (
    <div>
      <Options>
        <div>
          <Hashtag text="프론트개발" onSelect={handleTagSelect} />
          <Hashtag text="백엔드개발" onSelect={handleTagSelect} />
          <Hashtag text="앱개발" onSelect={handleTagSelect} />
          <Hashtag text="임베디드개발" onSelect={handleTagSelect} />
          <Hashtag text="서버개발" onSelect={handleTagSelect} />
          <Hashtag text="인프라" onSelect={handleTagSelect} />
          <Hashtag text="최신개발소식" onSelect={handleTagSelect} />
          <Hashtag text="공통프로젝트" onSelect={handleTagSelect} />
          <Hashtag text="네카라쿠배" onSelect={handleTagSelect} />
          <Hashtag text="Java" onSelect={handleTagSelect} />
          <Hashtag text="Python" onSelect={handleTagSelect} />
          <Hashtag text="Vue" onSelect={handleTagSelect} />
          <Hashtag text="React" onSelect={handleTagSelect} />
          <Hashtag text="C++" onSelect={handleTagSelect} />
          <Hashtag text="C" onSelect={handleTagSelect} />
          <Hashtag text="Go" onSelect={handleTagSelect} />
          <Hashtag text="TypeScript" onSelect={handleTagSelect} />
          <Hashtag text="JavaScript" onSelect={handleTagSelect} />
          <Hashtag text="CS스터디" onSelect={handleTagSelect} />
          <Hashtag text="면접스터디" onSelect={handleTagSelect} />
          <Hashtag text="PM" onSelect={handleTagSelect} />
          <Hashtag text="삼성" onSelect={handleTagSelect} />
          <Hashtag text="역량평가" onSelect={handleTagSelect} />
          <Hashtag text="코딩테스트" onSelect={handleTagSelect} />
          <Hashtag text="개발중" onSelect={handleTagSelect} />
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
