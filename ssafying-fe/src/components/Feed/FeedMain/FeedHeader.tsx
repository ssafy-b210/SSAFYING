import logo from "../../../assets/img/logoImg/logo1.svg";
import search from "../../../assets/img/imgBtn/search.svg";
import add from "../../../assets/img/imgBtn/add.svg";
import alarm from "../../../assets/img/imgBtn/alarm.svg";
import dm from "../../../assets/img/imgBtn/dm.svg";
import styled from "styled-components";
import ImgBtn from "../utils/ImgBtn";
import { Link } from "react-router-dom";

function FeedHeader() {
  return (
    <Header>
      <div>
        <Link to="/feedhome" className="home">
          <Img src={logo} alt="ssafying" height="30px" />
        </Link>
      </div>
      <div>
        <Link to="/search" className="search">
          <ImgBtn src={search} size="21px" />
        </Link>
        <Link to="/feedwrite" className="write">
          <ImgBtn src={add} size="21px" />
        </Link>
        <Link to="/alarmdetail" className="alarm">
          <ImgBtn src={alarm} size="21px" />
        </Link>
        <Link to="/chat">
          <ImgBtn src={dm} size="21px" />
        </Link>
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
