import { useEffect, useRef, useState } from "react";
import ImageCropper from "../../components/Feed/FeedCreate/ImgCropper";
import ImgCompress from "../../components/ImgHandle/ImgCompress";
import { dataURItoFile } from "../../components/ImgHandle/DataToFile";
import styled from "styled-components";

function FeedCreate() {
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  const [croppedImages, setCroppedImages] = useState<string[]>([]);
  const { isLoading: isCompressLoading, compressImage } = ImgCompress();
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

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
          <ImageCropper
            aspectRatio={1 / 1} // Aspect ratio for cropping
            onCrop={handleCrop} // Callback to handle cropped image
          >
            <CroppedImage src={croppedImages[currentImageIndex]} />
          </ImageCropper>
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

export default FeedCreate;

const FeedCreateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  background-color: #616161;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const CroppedImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0 10px;
`;

const NavigationButtons = styled.div`
  display: flex;
  margin-top: 20px;

  button {
    background-color: #616161;
    color: white;
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
`;
