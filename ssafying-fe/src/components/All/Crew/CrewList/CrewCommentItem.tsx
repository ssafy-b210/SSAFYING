import { useEffect, useState } from "react";
import styled from "styled-components";
import ImgBtn from "../../../Feed/utils/ImgBtn";
import deleteBtn from "../../../../assets/img/imgBtn/deleteBtn.svg";
import CrewRecommentList from "./CrewRecommentList";
import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/user";
import { deleteCrewComment } from "../../../../apis/api/Crew";

interface CommentProps {
  commentId: number;
  commentUser: {
    id: Number;
    nickname: string;
  };
  content: string;
  isHighlighted: boolean;
  onClick: () => void;
  replies: any[];
  time: string;
  onDelete: (id: number) => void;
}

function CrewCommentItem({
  commentId,
  commentUser,
  content,
  isHighlighted,
  onClick,
  replies,
  time,
  onDelete,
}: CommentProps) {
  const user = useAppSelector(selectUser);
  const [timeDiff, setTimediff] = useState("");

  useEffect(() => {
    if (time !== null && time !== undefined) {
      calcTimeDiff();
    }
  }, []);

  function calcTimeDiff() {
    const date = new Date(time.substring(0, 19));
    const now = new Date();
    const diff = Math.abs(date.getTime() - now.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
      if (days < 7) {
        setTimediff(`${days}일 전`);
      } else {
        setTimediff(`${date}`);
      }
    } else if (hours > 0) {
      setTimediff(`${hours}시간 전`);
    } else if (minutes > 0) {
      setTimediff(`${minutes}분 전`);
    } else {
      setTimediff(`${seconds}초 전`);
    }
  }

  async function clickDeleteBtn() {
    console.log("clickDeleteBtn");
    onDelete(commentId);
  }
  return (
    <>
      <UserWrapper isHighlighted={isHighlighted} onClick={onClick}>
        <CommentContent>
          <UserId>{commentUser.nickname}</UserId>
          <Content>{content}</Content>
        </CommentContent>
        <ButtonsWrapper>
          <div>
            <p>{timeDiff}</p>
            <TextBtn onClick={onClick}>답글달기</TextBtn>
          </div>
          {commentUser.id === user.userId && (
            <ImgBtn src={deleteBtn} onClick={clickDeleteBtn} size="15px" />
          )}
        </ButtonsWrapper>
      </UserWrapper>
      {replies.length > 0 && (
        <CrewRecommentList replies={replies} onDelete={onDelete} />
      )}
    </>
  );
}

export default CrewCommentItem;

const UserWrapper = styled.div<{ isHighlighted: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-top: 5px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isHighlighted ? "#f2f9f1" : "transparent"};
`;

const CommentContent = styled.div`
  margin-left: 8px;
`;

const UserId = styled.div`
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 14px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  p {
    font-size: 10px;
    color: gray;
  }
`;

const TextBtn = styled.div`
  font-size: 12px;
  color: #385185;
  cursor: pointer;
  margin-right: 10px;
`;
