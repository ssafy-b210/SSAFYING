import styled from "styled-components";
import Btn from "./OptionsBtn";
function SelectTagForm() {
  return (
    <div>
      <TagMsg>
        <h3>당신의 관심사를 태그로 선택해주세요</h3>
      </TagMsg>
      <Selected>
        <p>나의 관심사</p>
      </Selected>
      <Btn></Btn>
      <SubmitButton>싸피 인증하러 가기</SubmitButton>
    </div>
  );
}
export default SelectTagForm;

const TagMsg = styled.div`
  display: flex;
  justify-content: center;
`;

const Selected = styled.div`
  height: 100px;
  border: 1px solid gray;
  border-radius: 10px;
  p {
    margin-left: 1em;
  }
`;
const SubmitButton = styled.button`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  background-color: #b6cdbd;
  border: none;
  color: white;
  margin-top: 80%;
  color: black;
`;
