import styled from "styled-components";

interface CreateContentProps {
  onContentChange: (newContent: string) => void;
  initialContent?: string;
}

function CreateContent({ onContentChange }: CreateContentProps) {
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onContentChange(event.target.value);
  };
  return (
    <Content>
      <span>내용</span>
      <ContentContainer>
        <StyledInput onChange={handleContentChange} />
      </ContentContainer>
    </Content>
  );
}

export default CreateContent;

const Content = styled.div`
  width: 300px;
  margin-top: 20px;
  span {
    margin-left: 15px;
    font-weight: bold;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInput = styled.textarea`
  width: 95%;
  height: 300px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding: 10px;
  background-color: #d9d9d9;
  line-height: 1.5;
  resize: none;
  margin-bottom: 20px;
  font-size: 16px;
`;
