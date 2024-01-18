import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";
import styled from "styled-components";
import FeedMain from "./pages/Feed/FeedMain";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<FeedMain />} />
        <Route path="/signup" element={<UserSignup />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 560px;
  height: 100vh;
  margin: 0 auto;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
