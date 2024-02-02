import styled from "styled-components";

import ImgBtn from "../../Feed/utils/ImgBtn";
import saveBtn from "../../../assets/img/imgBtn/save.svg";

interface ContentContainerProps {
  boardId: number;
}

function ContentContainer() {
  const clickSaveBtn = () => {
    // console.log("Board ID:", boardId ?? "Undefined");
  };
  return (
    <ContentWrapper>
      <Content>
        <ImgBtnWrapper>
          <ImgBtn src={saveBtn} onClick={clickSaveBtn} size="20px"></ImgBtn>
        </ImgBtnWrapper>
      </Content>
    </ContentWrapper>
  );
}

export default ContentContainer;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 500px;
  height: 350px;
  border: none;
  border-radius: 20px;
  background-color: #f4f9f4;

  display: flex;
  justify-content: flex-end;
`;

const ImgBtnWrapper = styled.div`
  margin: 20px;
`;
