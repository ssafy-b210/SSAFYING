import React from "react";
import styled from "styled-components";
import Hashtag from "../utils/HashTag";

function FeedContent() {
  return (
    <ContentWrapper>
      <Content>
        오늘은 우리 팀제주도를 위해 기획 잘 하는 법을 배웠다.. 기획 나만
        힘들어여?
      </Content>
      <div>
        <Hashtag text="기획" />
        <Hashtag text="웹개발" />
        <Hashtag text="공통프로젝트" />
      </div>
    </ContentWrapper>
  );
}

export default FeedContent;

const ContentWrapper = styled.div`
  padding: 0 10px;
  line-height: 1;
`;

const Content = styled.span`
  font-size: 10px;
  font-weight: regular;
  vertical-align: middle;
`;
