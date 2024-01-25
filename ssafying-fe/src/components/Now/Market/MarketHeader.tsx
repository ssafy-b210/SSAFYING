import styled from "styled-components";
import back from "../../../assets/img/Btn/BackBtn.svg";
import PlusBtn from "../../All/Board/PlusBtn";

function MarketHeader() {
  return (
    <Header>
      <img src={back}></img>
      <h2>중고거래</h2>
      <PlusBtn></PlusBtn>
    </Header>
  );
}
export default MarketHeader;

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
