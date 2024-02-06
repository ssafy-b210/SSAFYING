import styled from "styled-components";

interface CreateTitleProps {
  onTitleChange: (newTitle: string) => void;
}

function CreateTitle({ onTitleChange }: CreateTitleProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTitleChange(event.target.value);
  };

  return (
    <Title>
      <h4>제목</h4>
      <TitleContainer>
        <input type="text" onChange={handleInputChange} />
      </TitleContainer>
    </Title>
  );
}

export default CreateTitle;

const Title = styled.div`
  h4 {
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
    background-color: #d9d9d9;
  }
`;
