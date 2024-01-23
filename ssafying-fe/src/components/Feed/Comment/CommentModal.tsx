import styled from "styled-components";
import CommentList from "./CommentList";

interface CommentModalProps {
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ onClose }) => {
  const handleCommentSubmit = (comment: string) => {
    console.log("Comment submitted:", comment);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <CommentList />
      </ModalContent>
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
  align-items: end;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  height: 90%;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 560px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #555;
`;
