import React, { useState, ChangeEvent, useCallback } from "react";
import ImgCropper from "./ImgCropper";

interface ImgUploaderProps {
  onUpload: (croppedImages: string[]) => void;
}

const ImgUploader: React.FC<ImgUploaderProps> = ({ onUpload }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages(newImages);
    }
  }, []);

  const handleUpload = () => {
    // Perform actions with the uploaded images
    onUpload(selectedImages);
    // Reset the state for the next batch of images
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div>
      {selectedImages.length === 0 && (
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          multiple
        />
      )}

      {selectedImages.length > 0 &&
        currentImageIndex < selectedImages.length && (
          <ImgCropper
            image={selectedImages[currentImageIndex]}
            onCancel={() => setSelectedImages([])}
            onUpload={() => handleNext()}
          />
        )}

      {currentImageIndex === selectedImages.length && (
        <>
          <button onClick={handlePrev} disabled={currentImageIndex === 0}>
            Previous
          </button>
          <button onClick={handleUpload} disabled={selectedImages.length === 0}>
            Upload Images
          </button>
        </>
      )}
    </div>
  );
};

export default ImgUploader;
