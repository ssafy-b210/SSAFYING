import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/testImg/user.jpg";
import more from "../../../assets/img/imgBtn/more.svg";
import RoundImg from "../utils/RoundImg";
import ImgBtn from "../utils/ImgBtn";
import Modal from "react-modal";

function FeedListItemUser() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function clickMoreBtn() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <UserWrapper>
      <div>
        <RoundImg src={userImage} size="30px" />
        <UserId>aeong123</UserId>
      </div>
      <div>
        <ImgBtn src={more} onClick={clickMoreBtn} size="20px" />
      </div>
      {/* 모달 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ButtonWrapper>
          <Button>수정</Button>
          <Button>삭제</Button>
        </ButtonWrapper>
      </Modal>
    </UserWrapper>
  );
}

export default FeedListItemUser;

const UserWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

const UserId = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: bold;
`;

// 모달 스타일을 위한 설정
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ButtonWrapper = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 15px; // 버튼 모서리 둥글게 만들기
`;

const Button = styled.button`
  background-color: #ccc; // 버튼 배경색 설정
  border: none; // 버튼 테두리 없애기
  cursor: pointer;
  transition: background-color 0.3s; // 호버 효과를 위한 전환 효과
  width: 100%;
  height: 50%;
  &:hover {
    background-color: #999; // 호버 시 배경색 변경
  }
`;
