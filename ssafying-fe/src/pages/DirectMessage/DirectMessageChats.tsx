import styled from "styled-components";
import { useState } from "react";
import RoundImg from "../../components/Feed/utils/RoundImg";
import { Link } from "react-router-dom";

function DirectMessageChats() {
  const [chatList, setChatList] = useState([
    {
      img: "../../assets/img/testImg/user.svg",
      name: "su00",
      message: "점심 뭐먹을거야?",
    },
    {
      img: "../../assets/img/testImg/user2.svg",
      name: "hhyyee",
      message: "알고리즘 문제 풀었어??",
    },
    {
      img: "../../assets/img/testImg/user3.svg",
      name: "yes.hs",
      message: "알고리즘 스터디 가입하고 싶어요!",
    },
    {
      img: "../../assets/img/testImg/user4.svg",
      name: "2.ye",
      message: "키보드 구매하고 싶어요",
    },
  ]);

  return (
    <div>
      {chatList.map((chat, index) => (
        <ProfileListItem key={index}>
          <Link to={`chat/${index}`}>
            <ProfileImg>
              <RoundImg size="54px" src={chat.img} />
            </ProfileImg>
            <div>
              <div>{chat.name}</div>
              <div className="preview-text">{chat.message}</div>
            </div>
          </Link>
        </ProfileListItem>
      ))}
    </div>
  );
}

export default DirectMessageChats;

const ProfileListItem = styled.div`
  margin-bottom: 16px;

  a {
    display: flex;
    color: #000;
    text-decoration: none;
  }

  .preview-text {
    line-height: 24px;
    font-size: 14px;
    color: #9c9c9c;
  }
`;

const ProfileImg = styled.div`
  margin-right: 10px;
`;
