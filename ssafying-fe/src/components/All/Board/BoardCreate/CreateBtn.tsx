import styled from "styled-components";
import pen from "../../../../assets/img/imgBtn/pen.svg";

function CreateBtn() {
  return (
    <ButtonContainer>
      <button>
        작성하기
        <img src={pen} />
      </button>
    </ButtonContainer>
  );
}

export default CreateBtn;

const ButtonContainer = styled.div`
  margin: 20px;
  float: right;
  button {
    border-radius: 20px;
    border: none;
    background-color: #616161;
    color: white;
    padding: 10px;
  }
  button img {
    margin-left: 2px;
  }
`;
