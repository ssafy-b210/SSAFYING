import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";
import ProfileMain from "./pages/Profile/ProfileMain";
import UserSelectTag from "./pages/User/UserSelectTag";
import styled from "styled-components";
import SsafyAuth from "./pages/User/UserAuth";
import UserDetail from "./pages/User/UserDetail";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<UserDetail />} />
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
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
