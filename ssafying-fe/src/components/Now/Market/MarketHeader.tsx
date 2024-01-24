import styled from "styled-components";
import back from "../../../assets/img/Btn/BackBtn.svg";

function MarketHeader() {
  return (
    <div>
      <Header>
        <img src={back}></img>
        <h2>중고거래</h2>
      </Header>
    </div>
  );
}
export default MarketHeader;

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
