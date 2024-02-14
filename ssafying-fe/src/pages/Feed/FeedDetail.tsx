import FeedDetailContent from "../../components/Feed/FeedDetail/FeedDetailContent";
import { useParams } from "react-router-dom";

function FeedDetail() {
  const feedId = useParams().feedId; // 현재 프로필 유저 아이디
  return (
    <div>
      <FeedDetailContent feedId={Number(feedId)} />
    </div>
  );
}
export default FeedDetail;
