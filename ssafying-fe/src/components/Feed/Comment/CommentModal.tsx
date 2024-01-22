import styled from "styled-components";

interface CommentModalProps {
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ onClose }) => {
  const handleCommentSubmit = (comment: string) => {
    // Your logic to handle comment submission
    console.log("Comment submitted:", comment);
    // Close the modal after handling the comment
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
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
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  height: 90%;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 560px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #555;
`;
