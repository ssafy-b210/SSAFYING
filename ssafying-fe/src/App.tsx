import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignup from "./pages/User/UserSignup";
import ProfileMain from "./pages/Profile/ProfileMain";
import styled from "styled-components";
import SsafyAuth from "./pages/User/UserAuth";
import ContentFeedSection from "./components/Profile/MyContents/ContentFeedSection";
import ContentPortfolioSection from "./components/Profile/MyContents/ContentPortfolioSection";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SsafyAuth />} />
        <Route path="/signup" element={<UserSignup />} />

        <Route path="/profile" element={<ProfileMain />}>
          <Route path="" element={<ContentFeedSection />} />
          <Route path="portfolio" element={<ContentPortfolioSection />} />
        </Route>
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
