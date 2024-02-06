import FlipCard from "../../All/Recruitment/FlipCard";

function SavedRecruitmentList() {
  const testInfo = {
    title: "title",
    company: "company",
    url: "url",
    index: 1,
  };

  return (
    <div>
      <FlipCard
        title={testInfo.title}
        company={testInfo.company}
        url={testInfo.url}
        index={testInfo.index}
      />
    </div>
  );
}

export default SavedRecruitmentList;
