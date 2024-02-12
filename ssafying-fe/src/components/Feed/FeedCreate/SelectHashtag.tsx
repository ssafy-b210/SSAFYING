import React, { useEffect, useState } from "react";
import Hashtag from "../utils/SignupHashTag";
import styled from "styled-components";

interface Props {
  onSelectHashtags: (hashtags: string[]) => void;
}

function SelectHashtag({ onSelectHashtags }: Props) {
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [hashtag, setHashtag] = useState("");

  useEffect(() => {
    onSelectHashtags(selectedHashtags);
  }, [selectedHashtags]);

  function addHashtag() {
    if (selectedHashtags.length === 5) {
      alert("최대 5개의 태그를 선택할 수 있습니다.");
    } else {
      if (hashtag === "") {
        alert("태그를 입력해주세요.");
      } else {
        if (selectedHashtags.includes(hashtag)) {
          alert("이미 선택된 태그입니다.");
        } else {
          setSelectedHashtags([...selectedHashtags, hashtag]);
        }
      }
    }
    setHashtag("");
  }

  return (
    <HashtagWrapper>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setHashtag(e.target.value);
          }}
          value={hashtag}
          placeholder="태그를 입력해주세요."
        />
        <button onClick={addHashtag}>추가</button>
      </div>
      <div>
        {selectedHashtags.map((hashtag) => (
          <Hashtag text={hashtag} key={hashtag} />
        ))}
      </div>
    </HashtagWrapper>
  );
}

export default SelectHashtag;

const HashtagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
  }
  input {
    width: 200px;
    height: 30px;
    margin: 0 10px;
    border-radius: 20px;
    border: none;
    padding: 5px 10px;
  }
  button {
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 5px 20px;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
  }
`;
