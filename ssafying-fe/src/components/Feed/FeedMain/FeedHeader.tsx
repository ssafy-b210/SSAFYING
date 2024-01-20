import logo from "../../../assets/img/logo/logo1.svg";
import search from "../../../assets/img/imgBtn/search.svg";
import add from "../../../assets/img/imgBtn/add.svg";
import alarm from "../../../assets/img/imgBtn/alarm.svg";
import dm from "../../../assets/img/imgBtn/dm.svg";
import styled from "styled-components";

function FeedHeader() {
  return (
    <Header>
      <div>
        <Img src={logo} alt="ssafying" height="18px" />
      </div>
      <div>
        <Img src={search} alt="search" height="21px" />
        <Img src={add} alt="add" height="21px" />
        <Img src={alarm} alt="alarm" height="21px" />
        <Img src={dm} alt="dm" height="21px" />
      </div>
    </Header>
  );
}
export default FeedHeader;

const Header = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  margin: 5px;
`;
