import React, { useState } from "react";
import TextArea from "../Feed/FeedCreate/TextArea";
import styled from "styled-components";
import { createBamboo } from "../../apis/api/Forest";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";

function BambooWriteModal() {
  const [content, setContent] = useState(""); // TextArea의 내용을 저장할 상태
  const user = useAppSelector(selectUser);

  const handleWrtie = async () => {
    try {
      const userId = user.userId;
      await createBamboo(userId, content);
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ModalWrapper>
      <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
      <ButtonWrapper>
        <button onClick={handleWrtie}>작성</button>
      </ButtonWrapper>
    </ModalWrapper>
  );
}

export default BambooWriteModal;

const ModalWrapper = styled.div`
  background-color: transparent;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
  }
`;
