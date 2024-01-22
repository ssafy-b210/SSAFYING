import styled from "styled-components";
import Hashtag from "../../Feed/utils/HashTag";

function OptionsBtn() {
  return (
    <div>
      <Options>
        <div>
          <Hashtag text="프론트" />
          <Hashtag text="대전" />
          <Hashtag text="공통프로젝트" />
        </div>
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
