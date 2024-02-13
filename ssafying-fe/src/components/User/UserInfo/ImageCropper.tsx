import { useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { styled } from "styled-components";

interface PropsType {
  onCrop: (image: string) => void;
  aspectRatio: number;
  children: React.ReactNode;
}

const ImageCropper = ({ children, aspectRatio, onCrop }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [image, setImage] = useState<null | string>(null);

  const handleChildrenClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files) return;
    if (files.length === 0) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      onCrop(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      setImage(null);
    }
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
      {image && (
        <CropperWrapper>
          <Backdrop />
          <Modal>
            <h3>이미지 편집하기</h3>
            <ContentWrapper>
              <Content>
                <Cropper
                  ref={cropperRef}
                  aspectRatio={aspectRatio}
                  src={image}
                  viewMode={1}
                  width={800}
                  height={500}
                  background={false}
                  responsive
                  autoCropArea={1}
                  checkOrientation={false}
                  guides
                />
              </Content>
            </ContentWrapper>
            <Footer>
              <button onClick={() => setImage(null)}>취소</button>
              <button className="crop" onClick={getCropData}>
                적용하기
              </button>
            </Footer>
          </Modal>
        </CropperWrapper>
      )}
    </>
  );
};

export default ImageCropper;

const CropperWrapper = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled.div`
  position: inherit;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
`;

const Modal = styled.div`
  z-index: 2;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    padding: 20px 16px;
    margin: 0;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 16px;
  background: #ffffff;
  column-gap: 12px;

  button {
    width: 100px;
    height: 40px;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
    background: white;
  }

  .crop {
    background: #7b73df;
    color: white;
    border: none;
  }
`;
