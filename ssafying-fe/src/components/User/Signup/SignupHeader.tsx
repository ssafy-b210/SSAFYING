import styled from "styled-components";
import backarrow from "../../../assets/img/backarrow.svg";

function SignupHeader() {
  return (
    <div>
      <Header>
        <img src={backarrow} />
        <h2>회원가입</h2>
      </Header>
    </div>
  );
}

export default SignupHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    height: 30px;
    margin-right: 10px;
  }
  h2 {
    margin: 0;
  }
`;
