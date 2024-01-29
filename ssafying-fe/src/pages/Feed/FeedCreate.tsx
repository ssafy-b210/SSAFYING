import React from "react";
import ImgUploader from "../../components/Feed/FeedCreate/ImgUploader";

function FeedCreate() {
  const handleImageUpload = (croppedImages: string[]) => {
    // Perform actions with the uploaded and cropped images
    console.log("Cropped images:", croppedImages);
  };

  return (
    <div>
      <h1>Image Uploader Example</h1>
      <ImgUploader onUpload={handleImageUpload} />
    </div>
  );
}

export default FeedCreate;
