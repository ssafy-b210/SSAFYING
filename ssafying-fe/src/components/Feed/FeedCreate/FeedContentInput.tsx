import React, { useState } from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import ImgEdit from "./ImgEdit";
import SelectHashtag from "./SelectHashtag";
import { createFeedItem } from "../../../apis/api/Feed";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

function FeedContentInput() {
  const [content, setContent] = useState(""); // TextArea의 내용을 저장할 상태
  const [images, setImages] = useState<string[]>([]); // 이미지들의 URL을 저장할 상태
  const [hashtags, setHashtags] = useState<string[]>([]); // 해시태그들 저장할 상태
  const user = useAppSelector(selectUser);

  console.log(hashtags);

  const handleSaveContent = async () => {
    try {
      if (content === "") {
        alert("문구를 입력해주세요");
      } else if (hashtags.length === 0) {
        alert("태그를 선택해주세요");
      } else {
        await createFeedItem(user.userId, content, images, hashtags);
        setContent("");
        setImages([]);
        setHashtags([]);
        alert("글이 성공적으로 저장되었습니다.");
      }
    } catch (error) {
      console.error("글 저장 중 오류 발생:", error);
      alert("글 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <InputWrapper>
      <ImgEdit onImagesChange={setImages} />
      <TextWrapper>
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </TextWrapper>
      <SelectHashtag onSelectHashtags={setHashtags} />
      <ButtonWrapper>
        <button onClick={handleSaveContent}>작성</button>
      </ButtonWrapper>
    </InputWrapper>
  );
}

export default FeedContentInput;

const InputWrapper = styled.div`
  width: 100%;
`;

const TextWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 5px 20px;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
  }
`;
