import { useEffect, useRef, useState } from "react";
import ImageCropper from "./ImgCropper";
import ImgCompress from "../../ImgHandle/ImgCompress";
import styled from "styled-components";

interface ImgEditProps {
  onImagesChange: (images: string[]) => void;
}

function ImgEdit({ onImagesChange }: ImgEditProps) {
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  const [croppedImages, setCroppedImages] = useState<string[]>([]);
  const { isLoading: isCompressLoading, compressImage } = ImgCompress();
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length === 0) return;

    const selectedFiles: FileList | null = e.target.files;
    if (!selectedFiles) return;

    const filesArray: File[] = Array.from(selectedFiles);
    setUploadImages(filesArray);
  };

  const handleCompressAndCropImages = async () => {
    const croppedImagesArray: string[] = [];

    for (const image of uploadImages) {
      const compressedImage = await compressImage(image);
      if (compressedImage) {
        const croppedImage = await getCroppedImage(compressedImage);
        croppedImagesArray.push(croppedImage);
      }
    }

    setCroppedImages(croppedImagesArray);
    onImagesChange(croppedImagesArray); // 이미지 변경 시 부모 컴포넌트로 전달
  };

  const getCroppedImage = async (image: File) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        resolve(reader.result as string);
      };
    });
  };

  useEffect(() => {
    if (uploadImages.length > 0) {
      handleCompressAndCropImages();
    }
  }, [uploadImages]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % croppedImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? croppedImages.length - 1 : prevIndex - 1
    );
  };

  const handleCrop = (croppedImage: string) => {
    const updatedCroppedImages = [...croppedImages];
    updatedCroppedImages[currentImageIndex] = croppedImage;
    setCroppedImages(updatedCroppedImages);
  };

  return (
    <FeedCreateWrapper>
      <InputWrapper>
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleUploadImage}
          multiple
        />
        <UploadButton onClick={() => inputRef.current?.click()}>
          📷 Upload Images
        </UploadButton>
      </InputWrapper>
      {uploadImages.length > 0 && (
        <>
          <ImageCropper aspectRatio={1 / 1} onCrop={handleCrop}>
            <CroppedImage src={croppedImages[currentImageIndex]} />
          </ImageCropper>
          <p>이미지를 클릭해서 변경하거나 수정하세요.</p>
          <NavigationButtons>
            <button onClick={handlePrevImage}>Previous</button>
            <button onClick={handleNextImage}>Next</button>
          </NavigationButtons>
        </>
      )}
      {isCompressLoading && <div>Loading...</div>}
    </FeedCreateWrapper>
  );
}

export default ImgEdit;

const FeedCreateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 11px;
    color: #333333;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const UploadButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const CroppedImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin: 0 10px;
`;

const NavigationButtons = styled.div`
  display: flex;

  button {
    background-color: #fff;
    border: none;
    padding: 5px 20px;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 10px;
  }
`;
