import React, { useState } from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import ImgEdit from "./ImgEdit";
import SelectHashtag from "./SelectHashtag";
import { createFeedItem } from "../../../apis/api/Feed";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { fstorage } from "../../../apis/firebase";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

function FeedContentInput() {
  const [content, setContent] = useState(""); // TextArea의 내용을 저장할 상태
  const [images, setImages] = useState<string[]>([]); // 이미지들의 URL을 저장할 상태
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState<string[]>([]); // 해시태그들 저장할 상태
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  // console.log(hashtags);

  const handleSaveContent = async () => {
    try {
      if (content === "") {
        alert("문구를 입력해주세요");
        return;
      }
      if (hashtags.length === 0) {
        alert("태그를 선택해주세요");
        return;
      }
      // 이미지 업로드 및 URL 가져오기
      const downloadURLs = await Promise.all(
        imageUrls.map(async (imageUrl) => {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const fileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
          const fileRef = ref(fstorage, `${user.nickname}/${fileName}`);
          await uploadString(fileRef, imageUrl, "data_url");
          const downloadURL = await getDownloadURL(fileRef);
          console.log(downloadURL);
          return downloadURL;
        })
      );

      await createFeedItem(user.userId, content, downloadURLs, hashtags);
      setContent("");
      setImages([]);
      setHashtags([]);
      alert("글이 성공적으로 저장되었습니다.");
      navigate("/feedhome");
    } catch (error) {
      console.error("글 저장 중 오류 발생:", error);
      alert("글 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <InputWrapper>
      {/* <ImgEdit onImagesChange={setImages} /> */}
      <ImgEdit onImagesChange={setImageUrls} />
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
  padding-bottom: 20px;
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

  margin-bottom: 30px;
  button {
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 5px 20px;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
  }
`;
