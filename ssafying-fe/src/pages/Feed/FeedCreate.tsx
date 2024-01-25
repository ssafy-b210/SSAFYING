import React from "react";
import ImgUploader from "../../components/Feed/FeedCreate/ImgUploader";
import TabBar from "../../components/All/Tabbar";

function FeedCreate() {
  const handleImageUpload = (croppedImages: string[]) => {
    // Perform actions with the uploaded and cropped image
    console.log("Cropped image:", croppedImages);
  };

  return (
    <div>
      <h1>Image Uploader Example</h1>
      <ImgUploader onUpload={handleImageUpload} />
      <TabBar />
    </div>
  );
}

export default FeedCreate;
