import styled from "styled-components";

function OptionsBtn() {
  return (
    <div>
      <Options>
        <Btn>#백엔드</Btn>
        <Btn>#프론트</Btn>
        <Btn>#대전</Btn>
      </Options>
    </div>
  );
}
export default OptionsBtn;

const Btn = styled.div`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 20px;
  background-color: #d9d9d9;
  margin: 10px;
  text-align: center;
`;
const Options = styled.div`
  display: flex;
  flex-direction: row;
`;
