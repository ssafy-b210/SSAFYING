import styled from "styled-components";

function CreateTitle() {
  return (
    <Title>
      <h5>제목</h5>
      <TitleContainer>
        <input type="text" />
      </TitleContainer>
    </Title>
  );
}

export default CreateTitle;

const Title = styled.div`
  h5 {
    margin-left: 20px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 500px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: #f4f9f4;
  }
`;
