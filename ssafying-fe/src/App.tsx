import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import UserSignup from "./pages/User/UserSignup";
import ProfileMain from "./pages/Profile/ProfileMain";
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
import ContentFeedSection from "./components/Profile/MyContents/ContentFeedSection";
import ContentPortfolioSection from "./components/Profile/MyContents/ContentPortfolioSection";
import ContentSavedSection from "./components/Profile/MyContents/ContentSavedSection";
import BottomNavBar from "./components/Common/BottomNavBar";
import AlarmDetail from "./pages/Feed/AlarmDetail";
import FollowingList from "./pages/Profile/FollowingList";
import FollowerList from "./pages/Profile/FollowerList";
import UserLogin from "./pages/User/UserLogin";
import SelectCampusMeal from "./pages/Now/MealPlanner/SelectCampusMeal";
import DirectMessageChats from "./pages/DirectMessage/DirectMessageChats";
import MealPlannerCreate from "./pages/Now/MealPlanner/MealPlannerCreate";
import BambooForest from "./pages/BambooForest/BambooForest";
import DirectMessageChattingRoom from "./pages/DirectMessage/DirectMessageChattingRoom";
import NowMenu from "./pages/Now/NowMenu";
import RecruitmentList from "./pages/All/Recruitment/RecruitementList";
import BusRealTimeSelect from "./pages/Now/BusRealTime/BusRealTimeSelect";
import BusRealTimeMap from "./pages/Now/BusRealTime/BusRealTimeMap";
import SavedFeedList from "./components/Profile/Saved/SavedFeedList";
import SavedBoardList from "./components/Profile/Saved/SavedBoardList";
import SavedRecruitmentList from "./components/Profile/Saved/SavedRecruitmentList";
import { useAppSelector } from "./store/hooks";
import { RootState } from "./store";
import FeedDetail from "./pages/Feed/FeedDetail";
import DirectMessageCreate from "./pages/DirectMessage/DirectMessageCreate";

function App() {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn
  );

  return (
    <Wrapper>
      {!isLoggedIn ? (
        <Routes>
          <Route path="*" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/tagselect" element={<UserSelectTag />} />
          <Route path="/auth" element={<UserAuth />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/user/detail" element={<UserDetail />} />
          <Route path="/user/leave" element={<UserLeave />} />
          <Route path="/user/update" element={<UserUpdate />} />

          <Route path="/all" element={<AllMenu />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/crew" element={<CrewList />} />
          <Route path="/recruit" element={<RecruitmentList />} />

          <Route path="/now" element={<NowMenu />} />
          <Route path="/market" element={<MarketList />} />
          <Route path="/mealplan" element={<SelectCampusMeal />} />
          <Route path="/shuttle" element={<BusRealTimeSelect />} />
          <Route path="/shuttle/:shuttleId" element={<BusRealTimeMap />} />

          <Route path="/" element={<FeedMain />} />
          <Route path="/feedhome" element={<FeedMain />} />
          <Route path="/search" element={<FeedSearch />} />
          <Route path="/feedwrite" element={<FeedCreate />} />
          <Route path="/alarmdetail" element={<AlarmDetail />} />
          <Route path="/forest" element={<BambooForest />} />
          <Route path="/feedhome/:feedId" element={<FeedDetail />} />

          <Route path="/profile" element={<ContentFeedSection />} />
          <Route path="/profile/:userId" element={<ProfileMain />}>
            <Route path="" element={<ContentFeedSection />} />
            <Route path="portfolio" element={<ContentPortfolioSection />} />
            <Route path="saved" element={<ContentSavedSection />}>
              <Route path="" element={<SavedFeedList />} />
              <Route path="board" element={<SavedBoardList />} />
              <Route path="recruiting" element={<SavedRecruitmentList />} />
            </Route>
          </Route>

          <Route
            path="/profile/:userId/following"
            element={<FollowingList />}
          />
          <Route path="/profile/:userId/follower" element={<FollowerList />} />
          <Route path="/chat" element={<DirectMessageChats />} />
          <Route path="/chat/:roomId" element={<DirectMessageChattingRoom />} />
          <Route path="/chat/create" element={<DirectMessageCreate />} />
          <Route path="/meal/create" element={<MealPlannerCreate />} />
        </Routes>
      )}
      {isLoggedIn && <BottomNavBar />}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  max-width: 560px;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  padding-bottom: 50px;
`;
