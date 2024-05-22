import React, { useState } from "react";
import styled from "styled-components";
import Hashtag from "../../Feed/utils/SignupHashTag";

interface LifeBtnProps {
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTags: string[];
}

function LifeBtn({ setSelectedTags, selectedTags }: LifeBtnProps) {
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
          <Hashtag text="대전" onSelect={handleTagSelect} />
          <Hashtag text="서울" onSelect={handleTagSelect} />
          <Hashtag text="부울경" onSelect={handleTagSelect} />
          <Hashtag text="구미" onSelect={handleTagSelect} />
          <Hashtag text="광주" onSelect={handleTagSelect} />
          <Hashtag text="맛집" onSelect={handleTagSelect} />
          <Hashtag text="클라이밍" onSelect={handleTagSelect} />
          <Hashtag text="키보드" onSelect={handleTagSelect} />
          <Hashtag text="풋살/축구" onSelect={handleTagSelect} />
          <Hashtag text="데이트" onSelect={handleTagSelect} />
          <Hashtag text="옷/OOTD" onSelect={handleTagSelect} />
          <Hashtag text="일상" onSelect={handleTagSelect} />
          <Hashtag text="국내여행" onSelect={handleTagSelect} />
          <Hashtag text="해외여행" onSelect={handleTagSelect} />
          <Hashtag text="친환경" onSelect={handleTagSelect} />
          <Hashtag text="캠페인" onSelect={handleTagSelect} />
          <Hashtag text="노래" onSelect={handleTagSelect} />
          <Hashtag text="볼링" onSelect={handleTagSelect} />
          <Hashtag text="음주" onSelect={handleTagSelect} />
          <Hashtag text="영화" onSelect={handleTagSelect} />
          <Hashtag text="넷플릭스" onSelect={handleTagSelect} />
          <Hashtag text="집콕" onSelect={handleTagSelect} />
          <Hashtag text="동물" onSelect={handleTagSelect} />
          <Hashtag text="썰전" onSelect={handleTagSelect} />
          <Hashtag text="MBTI" onSelect={handleTagSelect} />
          <Hashtag text="INTP" onSelect={handleTagSelect} />
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
