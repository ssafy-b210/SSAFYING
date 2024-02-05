import styled from "styled-components";
import { useState } from "react";

interface IsAnonymousProps {
  onNicknameChange: (newNickname: boolean) => void;
}

const IsAnonymous: React.FC<IsAnonymousProps> = ({ onNicknameChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newNickname = !isChecked;
    setIsChecked((prev) => !prev);
    onNicknameChange(newNickname);
  };
  //만약 익명에 체크되면 nickname="익명"으로 설정하기

  return (
    <Anonymous>
      <h4>익명</h4>
      <AnonymousContainer>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        {isChecked && <p>익명의 글로 작성됩니다.</p>}
        {!isChecked && <p>실명의 글로 작성됩니다.</p>}
      </AnonymousContainer>
    </Anonymous>
  );
};

export default IsAnonymous;

const Anonymous = styled.div`
  h4 {
    margin-left: 20px;
  }
  display: flex;
`;

const AnonymousContainer = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  input {
    margin: 10px;
    margin-left: 20px;
  }
`;
