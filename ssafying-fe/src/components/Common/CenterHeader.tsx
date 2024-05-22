import styled from "styled-components";
import logo from "../../assets/img/logoImg/logo1.svg";
import ImgBtn from "../Feed/utils/ImgBtn";
import { Link } from "react-router-dom";

function CenterHeader() {
  return (
    <Header>
      <Link to="/feedhome" className="home">
        <ImgBtn src={logo} size="32px" />
      </Link>
    </Header>
  );
}

export default CenterHeader;

const Header = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
