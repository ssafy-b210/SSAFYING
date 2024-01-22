import styled from "styled-components";
import UserRecommendListItem from "./UserRecommendListItem";

function UserRecommendList() {
  return (
    <RecommendWrapper>
      <Title>친구추천</Title>
      <RecommendList>
        <UserRecommendListItem id="yes.h" />
        <UserRecommendListItem id="yes.h" />
        <UserRecommendListItem id="yes.h" />
        <UserRecommendListItem id="yes.h" />
        <UserRecommendListItem id="yes.h" />
        <UserRecommendListItem id="yes.h" />
        <UserRecommendListItem id="yes.h" />
      </RecommendList>
    </RecommendWrapper>
  );
}
export default UserRecommendList;

const RecommendWrapper = styled.div`
  margin: 5px;
`;

const Title = styled.div`
  font-size: 11px;
`;

const RecommendList = styled.div`
  display: flex;
  overflow-y: scroll;
`;
