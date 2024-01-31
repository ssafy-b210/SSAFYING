import styled from "styled-components";
import UserRecommendListItem from "./UserRecommendListItem";

function UserRecommendList() {
  return (
    <RecommendWrapper>
      <Title>회원님을 위한 추천</Title>
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
  padding: 5px;
  margin: 5px 0;

  div {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  div::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Title = styled.div`
  font-size: 11px;
  margin-left: 10px;
  color: #4b4b4b;
`;

const RecommendList = styled.div`
  display: flex;
  overflow-y: scroll;
`;
