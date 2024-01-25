import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import ImgBtn from "../utils/ImgBtn";

interface ImgCropperProps {
  image: string;
  onCancel: () => void;
  onUpload: (croppedImage: string) => void;
}

const ImgCropper: React.FC<ImgCropperProps> = ({
  image,
  onCancel,
  onUpload,
}) => {
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  const onCropChange = useCallback((newCrop: { x: number; y: number }) => {
    setCrop(newCrop);
  }, []);

  const onZoomChange = useCallback((newZoom: number) => {
    setZoom(newZoom);
  }, []);

  return (
    <div>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={onCropChange}
        onZoomChange={onZoomChange}
      />
      <div>
        <ImgBtn src={image} size="21px" onClick={() => onUpload(image)} />
        <ImgBtn src={image} size="21px" onClick={onCancel} />
      </div>
    </div>
  );
};

export default ImgCropper;
