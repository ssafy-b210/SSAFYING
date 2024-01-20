import { styled } from "styled-components";
import HashtagButton from "../../components/Profile/HashtagButton";

function HashtagList() {
  return (
    <StyledHashTagList>
      <ul className="hashtag-list">
        <li className="hashtag-list-item">
          <HashtagButton />
        </li>
        <li className="hashtag-list-item">
          <HashtagButton />
        </li>
        <li className="hashtag-list-item">
          <HashtagButton />
        </li>
        <li className="hashtag-list-item">
          <HashtagButton />
        </li>
        <li className="hashtag-list-item">
          <HashtagButton />
        </li>
        <li className="hashtag-list-item">
          <HashtagButton />
        </li>
      </ul>
    </StyledHashTagList>
  );
}

const StyledHashTagList = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 5px 5px;
  }
`;
export default HashtagList;
