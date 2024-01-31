import React from "react";
import styled from "styled-components";
import BambooForestBack from "../../components/BambooForest/BambooForestBack";
import BambooForestContent from "../../components/BambooForest/BambooForestContent";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function BambooForest() {
  return (
    <Container>
      <BambooForestBack>
        <BambooForestContent />
      </BambooForestBack>
    </Container>
  );
}

export default BambooForest;
