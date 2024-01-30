import ImgEdit from "../../components/Feed/FeedCreate/ImgEdit";
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
      <ImgEdit />
      <FeedContentInput />
    </>
  );
}

export default FeedCreate;
