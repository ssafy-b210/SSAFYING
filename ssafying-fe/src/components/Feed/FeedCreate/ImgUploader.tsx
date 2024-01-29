import React, { useState, useRef } from "react";

interface ImgUploaderProps {
  onCrop: (image: string) => void;
  aspectRatio: number;
  children: React.ReactNode;
}

const ImgUploader: React.FC<ImgUploaderProps> = ({
  onCrop,
  aspectRatio,
  children,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<null | string>(null);

  const handleChildrenClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <span onClick={handleChildrenClick}>{children}</span>
    </>
  );
};

export default ImgUploader;
