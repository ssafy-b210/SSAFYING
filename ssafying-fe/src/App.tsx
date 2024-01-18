import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";
import ProfileMain from "./pages/Profile/ProfileMain";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/profile" element={<ProfileMain />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 560px;
  height: 100vh;
  margin: 0 auto;
  line-height: 1;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
