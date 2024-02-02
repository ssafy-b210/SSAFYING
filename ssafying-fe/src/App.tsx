import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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
import BottomNavBar from "./components/Common/BottomNavBar";
import FeedHeader from "./components/Feed/FeedMain/FeedHeader";
import AlarmDetail from "./pages/Feed/AlarmDetail";
import FollowingList from "./pages/Profile/FollowingList";
import FollowerList from "./pages/Profile/FollowerList";
import UserLogin from "./pages/User/UserLogin";
import SelectCampusMeal from "./pages/Now/MealPlanner/SelectCampusMeal";
import DirectMessageChats from "./pages/DirectMessage/DirectMessageChats";
import MealPlannerCreate from "./pages/Now/MealPlanner/MealPlannerCreate";
import MealPlannerView from "./pages/Now/MealPlanner/MealPlannerView";
import BambooForest from "./pages/BambooForest/BambooForest";
import SelectTagForm from "./components/User/Signup/SelectTagForm";
import DirectMessageChattingRoom from "./pages/DirectMessage/DirectMessageChattingRoom";
import NowMenu from "./pages/Now/NowMenu";
import RecruitmentList from "./pages/All/Recruitment/RecruitementList";
import BusRealTimeSelect from "./pages/Now/BusRealTime/BusRealTimeSelect";
import BusRealTimeMap from "./pages/Now/BusRealTime/BusRealTimeMap";

function App() {
  return (
    <AppWrapper>
      <Wrapper>
        <Routes>
          {/* <Route path="/" element={<CrewCreate />} /> */}
          <Route path="/" element={<SelectCampusMeal />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/auth" element={<UserAuth />} />
          <Route path="/login" element={<UserLogin />} />

          <Route path="/all" element={<AllMenu />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/board/${id}" element={<BoardDetail />} />
          <Route path="/board/create" element={<BoardCreate />} />
          <Route path="/crew" element={<CrewList />} />
          <Route path="/recruit" element={<RecruitmentList />} />

          <Route path="/now" element={<NowMenu />} />
          <Route path="/market" element={<MarketList />} />
          <Route path="/market/create" element={<MarketCreate />} />
          <Route path="/mealplan" element={<SelectCampusMeal />} />
          <Route path="/bus" element={<BusRealTimeSelect />} />
          <Route path="/bus/:id" element={<BusRealTimeMap />} />

          <Route path="/feedhome" element={<FeedMain />}></Route>
          <Route path="/search" element={<FeedSearch />} />
          <Route path="/feedwrite" element={<FeedCreate />} />
          <Route path="/alarmdetail" element={<AlarmDetail />} />
          <Route path="/forest" element={<BambooForest />} />

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
          <Route path="/direct/:id" element={<DirectMessageChattingRoom />} />
          <Route path="/meal/create" element={<MealPlannerCreate />} />
        </Routes>
        <BottomNavBar />
      </Wrapper>
    </AppWrapper>
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

const MoveGrad = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const AppWrapper = styled.div`
  background: linear-gradient(70deg, #e9feff, #b5e7ef, #ffc6fc);
  background-size: 200% 200%;
  animation: ${MoveGrad} 5s ease infinite;
  -webkit-animation: ${MoveGrad} 5s ease infinite;
  height: 100%;
  width: 100%;
`;
