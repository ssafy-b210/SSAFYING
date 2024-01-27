import React from "react";
import styled from "styled-components";
import BoardBtn from "../../../components/All/Board/BoardBtn";
import BoardHeaderWithoutPlus from "../../../components/All/Board/BoardMenu/BoardHeaderWithoutPlus";

const isMyPost = true;

function MarketDetail({ isMyPost }: { isMyPost: boolean }) {
  return (
    <div>
      <BoardHeaderWithoutPlus header="중고거래" />

      {isMyPost ? (
        // 내게시물인 경우
        <ButtonWrapper>
          <BoardBtn btnmsg="수정하기" />
          <BoardBtn btnmsg="삭제하기" />
        </ButtonWrapper>
      ) : (
        // 다른 사람의 게시물인 경우
        <ButtonWrapper>
          <BoardBtn btnmsg="채팅하기" />
        </ButtonWrapper>
      )}
    </div>
  );
}

// const renderMarketDetail = () => <MarketDetail isMyPost={isMyPost} />;

export default MarketDetail;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
