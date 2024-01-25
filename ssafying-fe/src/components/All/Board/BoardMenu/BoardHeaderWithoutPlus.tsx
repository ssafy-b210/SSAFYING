import styled from "styled-components";
import back from "../../../../assets/img/Btn/BackBtn.svg";

function BoardHeaderWithoutPlus() {
  return (
    <Header>
      <img src={back}></img>
      <h2>게시판</h2>
      <div></div>
    </Header>
  );
}
export default BoardHeaderWithoutPlus;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    margin-left: 20px;
  }
  img {
    margin-left: 20px;
    margin-top: 5px;
  }
`;
