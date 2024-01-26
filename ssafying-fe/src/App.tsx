import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignup from "./pages/User/UserSignup";
import ProfileMain from "./pages/Profile/ProfileMain";
import styled from "styled-components";
import FeedMain from "./pages/Feed/FeedMain";
import FeedSearch from "./pages/Feed/FeedSearch";
import FeedCreate from "./pages/Feed/FeedCreate";
import UserSelectTag from "./pages/User/UserSelectTag";
import UserLeave from "./components/User/UserLeave";
import UserDetail from "./pages/User/UserDetail";
import UserAuth from "./pages/User/UserAuth";
import UserUpdate from "./pages/User/UserUpdate";
import AllMenu from "./pages/All/AllMenu";
import CrewList from "./pages/All/Crew/CrewList";
import MarketList from "./pages/Now/Market/MarketList";
import BoardList from "./pages/All/Board/BoardList";
import SsafyAuth from "./pages/User/UserAuth";
import ContentFeedSection from "./components/Profile/MyContents/ContentFeedSection";
import ContentPortfolioSection from "./components/Profile/MyContents/ContentPortfolioSection";
import ContentSavedSection from "./components/Profile/MyContents/ContentSavedSection";
import BoardCreate from "./pages/All/Board/BoardCreate";
import MarketCreate from "./pages/Now/Market/MarketCreate";

function App() {
  return (
    <Wrapper>
      <Routes>
        {/* <Route path="/" element={<BoardList />} /> */}
        <Route path="/" element={<BoardCreate />} />
        <Route path="/signup" element={<UserSignup />} />

        <Route path="/feedhome" element={<FeedMain />} />
        <Route path="/search" element={<FeedSearch />} />
        <Route path="/feedwrite" element={<FeedCreate />} />

        <Route path="/profile" element={<ProfileMain />}>
          <Route path="" element={<ContentFeedSection />} />
          <Route path="portfolio" element={<ContentPortfolioSection />} />
          <Route path="saved" element={<ContentSavedSection />}>
            <Route path="" element={<ContentFeedSection />} />
            <Route path="board" element={<ContentFeedSection />} />
            <Route path="recruiting" element={<ContentFeedSection />} />
          </Route>
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 560px;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
