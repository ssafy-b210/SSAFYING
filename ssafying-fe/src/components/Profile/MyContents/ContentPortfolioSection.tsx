import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import styled from "styled-components";

function ContentPortfolioSection() {
  const [value, setValue] = useState<string | undefined>(
    "# **Hello world!!!**"
  );
  const [isModified, setIsModified] = useState<Boolean | undefined>(false);

  return (
    <MarkdownContainer>
      <MarkdownButtonContainer>
        {isModified ? (
          <div className="modifyButtons">
            <Button
              className="danger"
              onClick={() => {
                alert("포트폴리오 작성 취소");
                setIsModified(false);
              }}
            >
              취소
            </Button>
            <Button
              className="success"
              onClick={() => {
                alert("포트폴리오 작성 완료");
                setValue(value);
                setIsModified(false);
              }}
            >
              완료
            </Button>
          </div>
        ) : (
          <Button onClick={() => setIsModified(true)}>글 수정</Button>
        )}
      </MarkdownButtonContainer>
      {isModified ? (
        <div>
          <MDEditor value={value} onChange={setValue} preview="edit" />
        </div>
      ) : (
        <div className="markdownDiv" data-color-mode="light">
          <MDEditor.Markdown style={{ padding: 30 }} source={value} />
        </div>
      )}
    </MarkdownContainer>
  );
}

export default ContentPortfolioSection;

const MarkdownContainer = styled.div`
  margin: 10px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
`;

const MarkdownButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
  border-bottom: 1px solid #e8e8e8;
`;

const Button = styled.button`
  margin: 0 16px;
  padding: 8px 24px;
  font-size: 14px;
  color: #000;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;

  &.danger {
    color: #fff;
    border: none;
    background-color: #ff4a4a;
  }

  &.success {
    color: #fff;
    border: none;
    background-color: #8aae92;
  }
`;
