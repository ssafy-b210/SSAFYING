import styled from "styled-components";
import back from "../../../../assets/img/Btn/BackBtn.svg";
import PlusBtn from "../../Board/PlusBtn";

//gerrit
function CrewHeader() {
  return (
    <Header>
      <img src={back}></img>
      <h2>사람 구해요</h2>
      <PlusBtn></PlusBtn>
    </Header>
  );
}
export default CrewHeader;

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
