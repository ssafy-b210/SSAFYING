import React from "react";
import styled from "styled-components";
import HashtagButton from "../../Profile/HashtagButton";

const ContentWrapper = styled.div`
  padding: 0 10px;
  line-height: 1;
`;

const UserId = styled.span`
  font-size: 13px;
  font-weight: bold;
  margin-right: 5px;
  vertical-align: middle;
`;

const Content = styled.span`
  font-size: 10px;
  font-weight: regular;
  vertical-align: middle;
`;

function FeedContent() {
  return (
    <ContentWrapper>
      <UserId>aeong123</UserId>
      <Content>
        오늘은 우리 팀제주도를 위해 기획 잘 하는 법을 배웠다.. 기획 나만
        힘들어여? #기획 #웹개발 #공통프로젝트
      </Content>
      <HashtagButton text="기획"></HashtagButton>
    </ContentWrapper>
  );
}

export default FeedContent;
