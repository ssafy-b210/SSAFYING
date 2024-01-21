import styled from "styled-components";

function MyFeedListItem() {
  return (
    <StyledMyFeedListItem>
      <img
        src="https://via.assets.so/img.jpg?w=77&h=77&tc=gray&bg=#cecece&t=profile​"
        alt=""
      />
      <div className="text">
        오늘은 우리 팀제주도를 위해 기획 잘 하는 법을 배웠다.. 기획 나만
        힘들어여?
      </div>
    </StyledMyFeedListItem>
  );
}

const StyledMyFeedListItem = styled.div`
  display: inline-flex;
  margin: 20px;
  justify-content: center;
  list-style-type: none;
  box-sizing: border-box;

  img {
    width: 77px;
    height: 77px;
  }

  .text {
    margin: 10px 10px;
    margin-left: 15px;
  }
`;
export default MyFeedListItem;
