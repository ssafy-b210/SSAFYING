import React, { useRef, ChangeEvent } from "react";
import styled from "styled-components";

function AddPhoto() {
  const imagePreviewRef = useRef<HTMLUListElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = Array.from(e.currentTarget.files as FileList);

    if (
      uploadFiles.length + (imagePreviewRef.current?.children.length ?? 0) >
      3
    ) {
      alert("이미지는 최대 3개까지 업로드 가능합니다.");
      return;
    }

    uploadFiles.forEach((file) => {
      if (!file.type.match("image/.*")) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = createElement(e, file);
        imagePreviewRef.current?.appendChild(preview);
      };
      reader.readAsDataURL(file);
    });
  };

  const createElement = (e: ProgressEvent<FileReader>, file: File) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = e.target?.result as string;
    img.alt = file.name;
    img.style.objectFit = "cover";
    li.appendChild(img);
    return li;
  };

  return (
    <PhotoAddForm>
      <h4>사진</h4>
      <UploadButton onClick={() => imagePreviewRef.current?.click()}>
        📷 Upload Images
      </UploadButton>
      <PhotoInputContainer>
        <PhotoRealInput
          type="file"
          className="real-upload"
          accept="image/*"
          required
          multiple
          onChange={handleImageChange}
        />
        <PhotoInput>
          <ul ref={imagePreviewRef}></ul>
        </PhotoInput>
      </PhotoInputContainer>
    </PhotoAddForm>
  );
}

export default AddPhoto;

const PhotoAddForm = styled.div`
  h4 {
    margin-left: 20px;
  }
`;
const UploadButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 20px;
  cursor: pointer;
`;
const PhotoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 20px;
`;

const PhotoRealInput = styled.input`
  display: none;
`;

const PhotoInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  ul {
    width: 100px;
    height: 100px;
    background-color: #f4f9f4;
    border: 0;
    border-radius: 20px;
    margin-bottom: 10px;
  }
`;
