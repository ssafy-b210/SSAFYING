import { useEffect, useState } from "react";
import ImageCropper from "./ImageCropper";
import ImgCompress from "../../ImgHandle/ImgCompress";
import { dataURItoFile } from "../../ImgHandle/DataToFile";
import styled from "styled-components";

function ProfileImage() {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const { isLoading: isCompressLoading, compressImage } = ImgCompress();

  const handleUploadImage = (image: string) => setUploadImage(image);

  const handleCompressImage = async () => {
    if (!uploadImage) return;

    const imageFile = dataURItoFile(uploadImage);

    const compressedImage = await compressImage(imageFile);

    // 이미지 서버 저장 로직
    if (!compressedImage) return;
    const imageUrl = URL.createObjectURL(compressedImage);
    setCompressedImage(imageUrl);
  };

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <FeedCreateWrapper>
      <Profile>
        {compressedImage ? (
          <img src={compressedImage} />
        ) : (
          <div className="cover">
            {isCompressLoading ? "이미지 압축 중.." : "이미지가 없어요."}
          </div>
        )}
        <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
          <ImgUploadBtn>📷</ImgUploadBtn>
        </ImageCropper>
      </Profile>
    </FeedCreateWrapper>
  );
}

export default ProfileImage;

const FeedCreateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 200px;

  .cover {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    background: #7b73df;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }

  > img {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }
`;

const ImgUploadBtn = styled.button`
  position: absolute;
  background: #c4c4c4;
  border: none;
  bottom: 0;
  right: 4px;
  width: 60px;
  height: 60px;
  font-size: 20px;
  border-radius: 60px;

  :hover {
    background: #d4d4d4;
  }
`;
