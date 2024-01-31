import styled from "styled-components";

function FollowBtn() {
  return <BtnWrapper>팔로우</BtnWrapper>;
}

export default FollowBtn;

const BtnWrapper = styled.div`
  background-color: #fff4f9;
  border-radius: 5px;
  padding: 2px 10px;
  text-align: center;
  min-width: 40px;
  margin-top: 5px;
  font-size: 10px;
  cursor: pointer;
`;
