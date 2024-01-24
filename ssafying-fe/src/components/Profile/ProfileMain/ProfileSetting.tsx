import styled from "styled-components";

function ProflieSetting() {
  return (
    <StyledProfileSetting>
      <Button onClick={() => alert("회원정보 페이지로 이동")}>회원정보</Button>
      <Button className="danger" onClick={() => alert("로그아웃")}>
        로그아웃
      </Button>
    </StyledProfileSetting>
  );
}

export default ProflieSetting;

const StyledProfileSetting = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const Button = styled.button`
  margin: 0 16px;
  padding: 8px 30px;
  font-size: 14px;
  color: #000;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;

  &.danger {
    color: #fff;
    border: none;
    background-color: #ff4a4a;
  }
`;
