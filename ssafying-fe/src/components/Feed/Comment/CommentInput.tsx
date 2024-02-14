import React, { useState } from "react";
import styled from "styled-components";
import { createBoardComment } from "../../../apis/api/Board";
import { createCrewComment } from "../../../apis/api/Crew";
import { createFeedComment } from "../../../apis/api/Feed";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

interface CommentInputProps {
  onSubmit: (comment: string) => void;
  target: "board" | "crew" | "feed";
  id: Number;
  highlighted?: Number | null;
}

const CommentInput: React.FC<CommentInputProps> = ({
  onSubmit,
  target,
  id,
  highlighted,
}) => {
  const [comment, setComment] = useState("");

  const user = useAppSelector(selectUser);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    if (comment.trim() !== "") {
      onSubmit(comment);
      setComment("");
      try {
        if (target === "board") {
          if (highlighted === null) {
            await createBoardComment(id, user.userId, comment, -1);
          } else {
            await createBoardComment(id, user.userId, comment, highlighted);
          }
        } else if (target === "crew") {
          if (highlighted === null) {
            await createCrewComment(id, user.userId, comment, -1);
          } else {
            await createCrewComment(id, user.userId, comment, highlighted);
          }
        } else if (target === "feed") {
          if (highlighted === null) {
            await createFeedComment(id, user.userId, comment);
          } else {
            await createFeedComment(id, user.userId, comment, highlighted);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <>
      <CommentInputContainer>
        <Input type="text" value={comment} onChange={handleChange} />
        <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
      </CommentInputContainer>
    </>
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
