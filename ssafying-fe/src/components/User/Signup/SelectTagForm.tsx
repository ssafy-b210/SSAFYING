import React, { useState } from "react";
import styled from "styled-components";
import WorkBtn from "./WorkBtn";
import LifeBtn from "./LifeBtn";
import SubmitBtn from "../../Common/SubmitBtn";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { selectTag } from "../../../apis/api/User";

function SelectTagForm() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const user = useAppSelector(selectUser);

  const handleSubmit = async () => {
    try {
      const userId = user.userId;
      console.log(selectedTags);
      await selectTag(userId, selectedTags);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TagMsg>
        <h3>당신의 관심사를 태그로 선택해주세요</h3>
      </TagMsg>
      {/* 워크 */}
      <TagContainer>
        <WorkBtn
          setSelectedTags={setSelectedTags}
          selectedTags={selectedTags}
        />
      </TagContainer>
      <hr></hr>
      {/* 라이프 */}
      <TagContainer>
        <LifeBtn
          setSelectedTags={setSelectedTags}
          selectedTags={selectedTags}
        />
      </TagContainer>
      <BtnContainer>
        <SubmitBtn
          link="/"
          text="로그인하러가기"
          onClick={handleSubmit}
        ></SubmitBtn>
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
