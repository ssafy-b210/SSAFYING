import styled from "styled-components";

import ssafying from "../../../assets/img/Logo/ssafying.svg";

function LoginHeader() {
  return (
    <Header>
      <img src={ssafying} />
    </Header>
  );
}

export default LoginHeader;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  img {
    margin-bottom: 5px;
    height: 100px;
  }
`;
