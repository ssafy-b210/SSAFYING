import React, { useState } from "react";
import styled from "styled-components";

interface CommentInputProps {
  onSubmit: (comment: string) => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim() !== "") {
      onSubmit(comment);
      setComment(""); // Clear the input after submission
    }
  };

  return (
    <CommentInputContainer>
      <Input
        type="text"
        placeholder="Type your comment here..."
        value={comment}
        onChange={handleChange}
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </CommentInputContainer>
  );
};

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default CommentInput;
