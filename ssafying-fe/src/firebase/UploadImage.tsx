import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { fstorage } from "../apis/firebase";

interface UploadImageProps {
  setImageUrls: (urls: string[]) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ setImageUrls }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [prevUrls, setPrevUrls] = useState([]);

  const onImageChange = async (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const storageRef = ref(fstorage, `files/${file[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, file[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        switch (error.code) {
          case "storage/canceled":
            alert("Upload has been canceled");
            break;
          default:
            alert("An error occurred during upload");
        }
      },
      async () => {
        e.target.value = "";
        try {
          const downloadURL = await getDownloadURL(storageRef);
          console.log("File available at", downloadURL);
          setImageURL(downloadURL);
          // setPrevUrls([...prevUrls, downloadURL]);
          setImageUrls([...prevUrls, downloadURL]);
        } catch (error) {
          console.error("Error getting download URL:", error);
        }
      }
    );
  };

  return (
    <Wrapper>
      <input type="file" onChange={onImageChange} ref={inputRef} />
      {progressPercent > 0 && <div>Progress: {progressPercent}%</div>}
      {imageURL && <img src={imageURL} alt="Uploaded" />}
    </Wrapper>
  );
};

export default UploadImage;

const Wrapper = styled.div`
  img {
    width: 200px;
  }
`;
