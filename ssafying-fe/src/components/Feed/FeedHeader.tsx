import logo from "../../assets/img/logo1.svg";
import search from "../../assets/img/search.svg";
import add from "../../assets/img/add.svg";
import alarm from "../../assets/img/alarm.svg";
import dm from "../../assets/img/dm.svg";
import styled from "styled-components";

function FeedHeader() {
  return (
    <Header>
      <div>
        <img src={logo} alt="ssafying" />
      </div>
      <div>
        <Img src={search} alt="search" />
        <Img src={add} alt="add" />
        <Img src={alarm} alt="alarm" />
        <Img src={dm} alt="dm" />
      </div>
    </Header>
  );
}
export default FeedHeader;

const Header = styled.header`
  padding: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  margin: 5px;
`;
