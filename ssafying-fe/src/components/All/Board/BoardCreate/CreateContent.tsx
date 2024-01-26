import styled from "styled-components";

function CreateContent() {
  return (
    <Content>
      <h5>내용</h5>
      <ContentContainer>
        <StyledInput />
      </ContentContainer>
    </Content>
  );
}

export default CreateContent;

const Content = styled.div`
  h5 {
    margin-left: 20px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInput = styled.textarea`
  width: 500px;
  height: 500px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding: 10px;
  background-color: #f4f9f4;
  line-height: 1.5;
  resize: none;
`;
