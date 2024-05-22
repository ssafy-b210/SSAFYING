import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { selectSavedRecruitList } from "../../../apis/api/Profile";
import styled from "styled-components";
import FlipCard from "../../All/Recruitment/FlipCard";

type RecruitmentInfo = {
  title: string;
  company: string;
  url: string;
  index: number;
};

function SavedRecruitmentList() {
  const user = useAppSelector(selectUser);

  const [savedRecruitList, setSavedRecruitList] = useState<RecruitmentInfo[]>(
    []
  );

  async function getSavedRecruitList() {
    const res = await selectSavedRecruitList(user.userId);
    if (res !== undefined) {
      setSavedRecruitList(res.data.resultData);
    }
  }

  useEffect(() => {
    getSavedRecruitList();
  }, []);

  return (
    <div>
      {savedRecruitList.length > 0 ? (
        <CardWrapper>
          {savedRecruitList.map((item, index) => (
            <FlipCard
              key={index}
              arrIdx={index}
              title={item.title}
              company={item.company}
              url={item.url}
              index={item.index}
            />
          ))}
        </CardWrapper>
      ) : (
        <InfoText>저장된 채용공고가 없습니다.</InfoText>
      )}
    </div>
  );
}

export default SavedRecruitmentList;

const InfoText = styled.div`
  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
