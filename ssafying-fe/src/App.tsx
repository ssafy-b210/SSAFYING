import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

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
import CrewCreate from "./pages/All/Crew/CrewCreate";
import renderMarketDetail from "./pages/Now/Market/MarketDetail";
import MarketDetail from "./pages/Now/Market/MarketDetail";
import BoardDetail from "./pages/All/Board/BoardDetail";
import CrewDetail from "./pages/All/Crew/CrewDetail";
import CrewCardList from "./components/All/Crew/CrewList/CrewCardList";
import BottomNavBar from "./components/Common/BottomNavBar";
import FeedHeader from "./components/Feed/FeedMain/FeedHeader";
import AlarmDetail from "./pages/Feed/AlarmDetail";
import FollowingList from "./pages/Profile/FollowingList";
import FollowerList from "./pages/Profile/FollowerList";
import UserLogin from "./pages/User/UserLogin";
import SelectCampusMeal from "./pages/Now/MealPlanner/SelectCampusMeal";
import DirectMessageChats from "./pages/DirectMessage/DirectMessageChats";
import ChatWrapper from "./components/DirectMessage/ChatWrapper";

function App() {
  return (
    <Wrapper>
      <FeedHeader />
      <Routes>
        {/* <Route path="/" element={<CrewCreate />} /> */}
        <Route path="/" element={<SelectCampusMeal />} />
        <Route path="/signup" element={<UserSignup />} />

        <Route path="/feedhome" element={<FeedMain />} />
        <Route path="/search" element={<FeedSearch />} />
        <Route path="/feedwrite" element={<FeedCreate />} />
        <Route path="/alarmdetail" element={<AlarmDetail />} />
        <Route path="/profile" element={<ProfileMain />}>
          <Route path="" element={<ContentFeedSection />} />
          <Route path="portfolio" element={<ContentPortfolioSection />} />
          <Route path="saved" element={<ContentSavedSection />}>
            <Route path="" element={<ContentFeedSection />} />
            <Route path="board" element={<ContentFeedSection />} />
            <Route path="recruiting" element={<ContentFeedSection />} />
          </Route>
        </Route>
        <Route path="/profile/following" element={<FollowingList />} />
        <Route path="/profile/follower" element={<FollowerList />} />
        <Route path="/direct" element={<DirectMessageChats />} />
        <Route path="/direct/:id" element={<ChatWrapper />} />
      </Routes>
      <BottomNavBar />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 560px;
  min-height: 100vh;
  margin: 0 auto;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
