import styled from "styled-components";

function IsAnonymous() {
  return (
    <Anonymous>
      <h5>익명</h5>
      <AnonymousContainer>
        <input type="checkbox"></input>
      </AnonymousContainer>
    </Anonymous>
  );
}

export default IsAnonymous;

const Anonymous = styled.div`
  h5 {
    margin-left: 20px;
  }
  display: flex;
`;

const AnonymousContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;
