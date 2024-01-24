import styled from "styled-components";
import back from "../../../../assets/img/Btn/BackBtn.svg";

//gerrit
function BoardHeader() {
  return (
    <div>
      <Header>
        <img src={back}></img>
        <h2>게시판</h2>
      </Header>
    </div>
  );
}
export default BoardHeader;

const Header = styled.div`
  display: flex;
  h2 {
    margin-left: 20px;
  }
  img {
    margin-left: 20px;
    margin-top: 5px;
  }
`;
