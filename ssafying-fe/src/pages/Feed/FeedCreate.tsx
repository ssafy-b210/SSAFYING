import BackBtnHeader from "../../components/Common/BackBtnHeader";
import FeedContentInput from "../../components/Feed/FeedCreate/FeedContentInput";

function FeedCreate() {
  return (
    <>
      <BackBtnHeader
        backLink="/feedhome"
        text="게시글 작성하기"
        isCenter={true}
      />
      <FeedContentInput />
    </>
  );
}

export default FeedCreate;
