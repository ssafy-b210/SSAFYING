import styled from "styled-components";
import UserRecommendListItem from "./UserRecommendListItem";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { useEffect, useState } from "react";
import { getRecommendList } from "../../../apis/api/Recommend";

function UserRecommendList() {
  const user = useAppSelector(selectUser);
  const [recommendList, setRecommendList] = useState<any[]>([]);

  useEffect(() => {
    handleRecommendList();
  }, []);

  const handleRecommendList = async () => {
    const list = await getRecommendList(user.userId);
    console.log(list);
    setRecommendList(list || []);
  };

  return (
    <RecommendWrapper>
      <Title>회원님을 위한 추천</Title>
      {recommendList.length > 0 && (
        <RecommendList>
          {recommendList.map((item, index) => {
            return <UserRecommendListItem key={index} recommendItem={item} />;
          })}
        </RecommendList>
      )}
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
