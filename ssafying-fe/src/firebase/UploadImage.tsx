import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../apis/firebase";
import React, { useState, useRef } from "react";

const UploadImage = ({ setImage }: { setImage: (p: string) => void }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [progressPercent, setProgressPercent] = useState<number>(0);

  console.log(setImage);

  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const storageRef = ref(storage, `files/${file[0].name}`);
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
            alert("Upload has been calceled");
            break;
        }
      },
      () => {
        e.target.value = "";
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log("File availbale at", downloadURL);
          setImageURL(downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  return (
    <div>
      <input type="file" onChange={onImageChange} ref={inputRef} />
      {progressPercent > 0 && <div>Progress: {progressPercent}%</div>}
      {imageURL && <img src={imageURL} alt="Uploaded" />}
    </div>
  );
};

export default UploadImage;
