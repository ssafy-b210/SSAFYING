import styled from "styled-components";
import Hashtag from "../utils/SignupHashTag";

interface Props {
  content: string;
  hashtag: {
    id: number;
    tagName: string;
  }[];
}

function FeedContent({ content, hashtag }: Props) {
  console.log(hashtag);
  return (
    <ContentWrapper>
      <Content>{content}</Content>
      <div>
        {hashtag.map((item) => (
          <Hashtag key={item.id} text={item.tagName} />
        ))}
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
  font-size: 13px;
  font-weight: regular;
  vertical-align: middle;
`;
