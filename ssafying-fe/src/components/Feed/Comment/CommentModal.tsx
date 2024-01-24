import React, { useState } from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";

interface CommentModalProps {
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ onClose }) => {
  const [modalClosed, setModalClosed] = useState(false);

  const handleCommentSubmit = (comment: string) => {
    console.log("Comment submitted:", comment);
    setModalClosed(true);

    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent closed={modalClosed}>
        <CloseButtonContainer>
          <CloseButton onClick={() => handleCommentSubmit("")}>
            &times;
          </CloseButton>
        </CloseButtonContainer>
        <CommentList />
      </ModalContent>
      <CommentInputContainer>
        <CommentInput onSubmit={handleCommentSubmit} />
      </CommentInputContainer>
    </ModalOverlay>
  );
};

export default CommentModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ModalContent = styled.div<{ closed: boolean }>`
  background: white;
  height: 90%;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 560px;
  overflow-y: scroll;
  padding-bottom: 55px;
  transition: transform 0.7s ease-in-out;
  transform: translateY(${(props) => (props.closed ? "100%" : "0")});
  &::-webkit-scrollbar {
    width: 0;
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #555;
`;

const CommentInputContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 560px;
  background-color: white;
`;
