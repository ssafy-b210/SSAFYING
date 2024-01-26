import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import ImgBtn from "../utils/ImgBtn";
import styled from "styled-components";

interface ImgCropperProps {
  images: string[];
  onCancel: () => void;
  onUpload: (croppedImages: string[]) => void;
}

const ImgCropper: React.FC<ImgCropperProps> = ({
  images,
  onCancel,
  onUpload,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImages, setCroppedImages] = useState<string[]>([]);

  const onCropChange = useCallback((newCrop: { x: number; y: number }) => {
    setCrop(newCrop);
  }, []);

  const onZoomChange = useCallback((newZoom: number) => {
    setZoom(newZoom);
  }, []);

  const onCropComplete = useCallback(
    (
      croppedArea: { x: number; y: number; width: number; height: number },
      croppedAreaPixels: { x: number; y: number; width: number; height: number }
    ) => {
      const canvas = document.createElement("canvas");
      const imageElement = document.createElement("img");
      imageElement.src = images[currentImageIndex];
      const scaleX = imageElement.naturalWidth / imageElement.width;
      const scaleY = imageElement.naturalHeight / imageElement.height;
      canvas.width = 300;
      canvas.height = 300;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(
          imageElement,
          croppedArea.x * scaleX,
          croppedArea.y * scaleY,
          croppedArea.width * scaleX,
          croppedArea.height * scaleY,
          0,
          0,
          300,
          300
        );
        canvas.toBlob((blob) => {
          if (blob) {
            const croppedImage = URL.createObjectURL(blob);
            setCroppedImages((prevImages) => [...prevImages, croppedImage]);
          }
        }, "image/jpeg");
      }
    },
    [images, currentImageIndex]
  );

  const handleNext = useCallback(() => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
      setCrop({ x: 0, y: 0 }); // Reset crop for the next image
    }
  }, [currentImageIndex, images]);

  const handlePrev = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
      setCrop({ x: 0, y: 0 }); // Reset crop for the previous image
    }
  }, [currentImageIndex]);

  const handleConfirm = useCallback(() => {
    onUpload(croppedImages);
  }, [croppedImages, onUpload]);

  return (
    <CropperContainer>
      <Cropper
        image={images[currentImageIndex]}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={onCropChange}
        onZoomChange={onZoomChange}
        onCropComplete={onCropComplete}
      />
      <ButtonContainer>
        <ImgBtn
          src={images[currentImageIndex]}
          size="21px"
          onClick={onCancel}
        />
        <Button onClick={handlePrev} disabled={currentImageIndex === 0}>
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentImageIndex === images.length - 1}
        >
          Next
        </Button>
        {croppedImages.length === images.length && (
          <Button onClick={handleConfirm}>Confirm</Button>
        )}
      </ButtonContainer>
    </CropperContainer>
  );
};

export default ImgCropper;

const CropperContainer = styled.div`
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000; /* Ensure buttons appear on top of the cropper */
`;

const Button = styled.button`
  margin: 0 5px;
`;
