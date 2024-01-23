import styled from "styled-components";
import backarrow from "../../../assets/img/backarrow.svg";

function UserUpdateHeader() {
  return (
    <div>
      <Header>
        <img src={backarrow} />
        <h2>회원정보 수정</h2>
      </Header>
    </div>
  );
}

export default UserUpdateHeader;

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
    margin-top: 15px;
  }
`;
