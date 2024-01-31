import styled from "styled-components";
import WorkBtn from "./WorkBtn";
import LifeBtn from "./LifeBtn";
import SubmitBtn from "../../Common/SubmitBtn";

function SelectTagForm() {
  return (
    <div>
      <TagMsg>
        <h3>당신의 관심사를 태그로 선택해주세요</h3>
      </TagMsg>
      {/* 워크 */}
      <TagContainer>
        <WorkBtn></WorkBtn>
      </TagContainer>
      <hr></hr>
      {/* 라이프 */}
      <TagContainer>
        <LifeBtn></LifeBtn>
      </TagContainer>
      <BtnContainer>
        <SubmitBtn link="/auth" text="싸피 인증하러 가기"></SubmitBtn>
      </BtnContainer>
    </div>
  );
}
export default SelectTagForm;

const TagMsg = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TagContainer = styled.div``;
