import styled from "styled-components";

interface CreateTitleProps {
  onTitleChange: (newTitle: string) => void;
  initialTitle?: string;
}

function CreateTitle({ onTitleChange }: CreateTitleProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    onTitleChange(newTitle);
  };

  return (
    <Title>
      <span>제목</span>
      <TitleContainer>
        <input type="text" onChange={handleInputChange} />
      </TitleContainer>
    </Title>
  );
}

export default CreateTitle;

const Title = styled.div`
  width: 300px;
  margin-top: 20px;
  span {
    margin-left: 15px;
    font-weight: bold;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 100%;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: #d9d9d9;
  }
`;
