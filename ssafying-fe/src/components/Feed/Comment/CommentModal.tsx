import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import { getFeedComment } from "../../../apis/api/Feed";
import Modal from "react-modal";

interface CommentModalProps {
  onClose: () => void;
  feedId: number;
}

const CommentModal: React.FC<CommentModalProps> = ({ onClose, feedId }) => {
  const [commentList, setCommentList] = useState<any[]>([]);
  const [highlighted, setHighlighted] = useState<number | null>(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const list = await getFeedComment(feedId);
    setCommentList(list || []);
  };

  const handleCommentSubmit = async (comment: string) => {
    console.log("Comment submitted:", comment);
    await fetchComments();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose} style={customStyles}>
      <CommentWrapper>
        <CommentList
          feedId={feedId}
          parent={(id) => setHighlighted(id)}
          commentList={commentList}
        />
      </CommentWrapper>
      <CommentInputContainer>
        <CommentInput
          onSubmit={handleCommentSubmit}
          target="feed"
          id={feedId}
          highlighted={highlighted}
        />
      </CommentInputContainer>
    </Modal>
  );
};

export default CommentModal;

// 모달 스타일을 위한 설정
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "560px",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    overflow: "hidden",
  },
};

const CommentInputContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 560px;
  background-color: white;
`;

const CommentWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  overflow-y: scroll;
  margin-bottom: 10px;
`;
