import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";
<<<<<<< HEAD

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
    </Routes>
=======
import ProfileMain from "./pages/Profile/ProfileMain";
import styled from "styled-components";
import FeedMain from "./pages/Feed/FeedMain";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<FeedMain />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/profile" element={<ProfileMain />} />
      </Routes>
    </Wrapper>
>>>>>>> 1137695d5a93dc7e907948bdcf6eaf2fba081377
  );
}

export default App;
