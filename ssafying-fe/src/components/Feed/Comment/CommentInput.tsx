import React, { useState } from "react";
import styled from "styled-components";
import { createBoardComment } from "../../../apis/api/Board";
import { createCrewComment } from "../../../apis/api/Crew";
import { createFeedComment } from "../../../apis/api/Feed";

interface CommentInputProps {
  onSubmit: (comment: string) => void;
  target: "board" | "crew" | "feed";
}

const CommentInput: React.FC<CommentInputProps> = ({ onSubmit, target }) => {
  const [comment, setComment] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    if (comment.trim() !== "") {
      onSubmit(comment);
      setComment("");
      try {
        if (target === "board") {
          await createBoardComment(1, 1, comment, -1, true);
        } else if (target === "crew") {
          await createCrewComment(1, 1, comment, -1);
        } else if (target === "feed") {
          await createFeedComment(1, 1, comment);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <CommentInputContainer>
      <Input type="text" value={comment} onChange={handleChange} />
      <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
    </CommentInputContainer>
  );
};

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  background-color: white;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 5px;
`;

const SubmitButton = styled.button`
  background-color: #616161;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
`;

export default CommentInput;
