import { useEffect, useState } from "react";
import ImageCropper from "./ImageCropper";
import ImgCompress from "../../ImgHandle/ImgCompress";
import { dataURItoFile } from "../../ImgHandle/DataToFile";
import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { fstorage } from "../../../apis/firebase";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import { selectOneUserInfo } from "../../../apis/api/User";
import profileImage from "../../../assets/img/userIcons/profileImage.jpg";

interface ProfileImageProps {
  onDownloadUrlChange: (downloadURL: string) => void;
}

function ProfileImage({ onDownloadUrlChange }: ProfileImageProps) {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);
  const user = useAppSelector(selectUser);
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

    const reader = new FileReader();
    reader.readAsDataURL(compressedImage);
    reader.onloadend = async () => {
      const imageUrl = reader.result as string;

      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const fileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
      const fileRef = ref(fstorage, `${user.nickname}/${fileName}`);
      await uploadString(fileRef, imageUrl, "data_url");
      const downloadURL = await getDownloadURL(fileRef);
      console.log(downloadURL);
      onDownloadUrlChange(downloadURL);
    };
  };

  const profileImg = user.profileImgUrl || profileImage;

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await selectOneUserInfo(user.userId);
        setUserInfo(userData.resultData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user.userId]);

  return (
    <FeedCreateWrapper>
      <Profile>
        {/* 기본이미지 저장 */}
        {compressedImage ? (
          <img src={compressedImage} />
        ) : (
          <img src={profileImg} />
        )}
        {/* {userInfo && userInfo.resultData ? (
          <img src={userInfo.resultData} />
        ) : (
          <div className="cover">
            {isCompressLoading ? "이미지 압축 중.." : "이미지가 없어요."}
          </div>
        )} */}
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
