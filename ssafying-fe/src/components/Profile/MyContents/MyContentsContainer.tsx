import { Outlet } from "react-router";
import ContentTabBar from "./ContentTabBar";
import styled from "styled-components";

function MyContentsContainer() {
  return (
    <div>
      <ContentTabBar />
      <StyledContentSection>
        <Outlet />
      </StyledContentSection>
    </div>
  );
}

export default MyContentsContainer;

const StyledContentSection = styled.div`
  margin-top: 3px;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;
