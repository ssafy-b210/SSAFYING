# SSAFYING - 싸피 모든 기수와 현재 기수 통합 SNS

![image](/uploads/9543c7e584c288890d91253b431ef986/main.png)

<br />

### 웹 서비스 소개


> 우리는 여전히 싸피중
> 

SSAFYING(싸핑)은 삼성 청년 SW 아카데미 교육생과 수료생들이 함께 소통할 수 있는 SNS 서비스입니다. 

수료 중에도, 수료 후에도, 싸피와의 인연이 계속 될 수 있도록 SSAFYING이 함께하겠습니다.

<br />

## 프로젝트 소개

삼성 청년 SW 아카데미 10기 2학기 공통 프로젝트 팀 B210 

24.01.08 ~ 24.02.16 (6주)

총 6명 (프론트 3 / 백 3)

<br />

## 👨‍👩‍👧‍👦 팀원 역할 및 소개


### Backend

|이예원(팀장)|김수은|노현석|
|:-:|:-:|:-:|
|<img src="/uploads/053155b42bdd0d7af9fdd831755d17bc/yewon.jpg" width="150px" />|<img src="/uploads/1c5557badc85cfcb257186081b9e6d5a/sooeun.jpg" width="150px" />|<img src="/uploads/7b326b5e9536c7704ef1b4cf7d9c5538/hyunseok.jpg" width="150px" />|

### Frontend

|김혜진|이수민|임지은|
|:-:|:-:|:-:|
|<img src="/uploads/23f17881f097cc68e4fc64eb765ac673/hyejin.jpg" width="150px" />|<img src="/uploads/648c95dfdb019f266c408d8cd8e76b29/sumin.jpg" width="150px" />|<img src="/uploads/1b3eb66140d819ddcaa7a0ba8a8a2b26/jieun.jpg" width="150px" />|

### Infra

노현석

<br />

## ⚙ 기술스택


### ☑ Backend

Java, Spring-Boot, JPA, MySQL

Postman, Swagger

### ☑ Frontend

HTML5, TypeScript, Styled-component

React, Redux, MUI

### ☑ Infra

NGINX, AWS, Jenkins, Docker

<br />

## 💎 API Docs

### [SSAFYING Swagger](https://i10b210.p.ssafy.io/api/swagger-ui/index.html)
<br />

## ✨ ERD
![ssafying_erd](/uploads/6b6cb511889482be954d5e3939232b48/ssafying_erd.png)
<br />

## 💡 주요 기능

| 기능                      | 내용                                                                                                                                |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| 피드(메인페이지)                   | 일상 생활을 싸피인들과 공유할 수 있습니다. 자유로운 소통을 위한 Direct Message와 나와 관련된 활동에 대한 알림 기능이 있습니다. |
| 게시판               | 자유롭게 정보를 공유할 수 있는 전체 게시판, 같은 취미와 관심사를 공유하는 싸피인을 찾는 구인 게시판, 같은 캠퍼스 내에서 중고거래, 나눔을 할 수 있는 중고거래 게시판이 있습니다.            |
| 대나무숲 | 누구에게 말 못할 고민이나 걱정거리를 털어놓을 수 있는 대나무 숲입니다. 24시간이 지나면 사라집니다.                  |
| 셔틀   | 싸피에서 운행하는 셔틀 버스의 위치를 알 수 있도록 지도에 표시해주는 기능입니다.              |
| 식단표            | 싸피 점심시간 식단표를 저장, 공유할 수 있고 메뉴 투표 기능이 있습니다.                                           |
| 채용공고            | 취업이 목표인 싸피인들에게 사람인 API를 이용한 취업 정보를 제공합니다.
<br />

### 싸피 인증
![회원가입](/uploads/1ffaa8e9d8b91082f2acd2d0f4637aac/회원가입.gif)

### 피드 작성
![피드작성](/uploads/3793d3cf2f4672709a073398c962b078/피드작성.gif)

### 추천 친구, 추천 게시물 - 콜드 스타트 문제 개선
![추천친구](/uploads/990e97b91e31cb757cc0d1ac4cf4154d/추천친구.gif)

### 검색 - 해시태그, 닉네임
![검색_팔로우](/uploads/bed5ef1a371f37503cc5cfebd3a7091a/검색_팔로우.gif)

### 알림
![알림](/uploads/d38c9b4d5c783663f85683a861073ac2/알림.gif)

### 마이페이지 - 포트폴리오
![마이페이지_포트폴리오](/uploads/3ead91e1d99ada496217fec8cc561f56/마이페이지_포트폴리오.gif)

### 중고거래
![중고거래](/uploads/55beebd4555e595507cdcdf76cf137b5/중고거래.gif){: width="100%"}

### 대나무숲
![대나무숲](/uploads/2aab0c323f056db0100b44adae971eaa/대나무숲.gif)

### 셔틀버스 위치 공유
![셔틀](/uploads/36cb7ef420ec3f06e2a7188b9d9592ff/셔틀.gif)

### 식단표
![식단표](/uploads/fa5ea4bd82f7bc61c7ef5e07c60e1965/식단표.gif)

### 채용공고 - 사람인 API
![채용공고](/uploads/03156c405c056c1234c3b40508740748/채용공고.gif)

## 아키텍처
![시스템아키텍처](/uploads/d501e2c9252f79ec78b6ae8979bdfc95/시스템아키텍처.png)

## 📂 프로젝트 구성도

<details>
  <summary>
  프론트엔드 디렉토리 구조
  </summary>

    📦public
    ┣ 📜favicon.ico
    ┣ 📜index.css
    ┣ 📜index.html
    ┣ 📜manifest.json
    ┗ 📜robots.txt
    📦src
    ┣ 📂apis
    ┃ ┣ 📂api
    ┃ ┃ ┣ 📂recruitment
    ┃ ┃ ┃ ┗ 📜saramin.ts
    ┃ ┃ ┣ 📂shuttle
    ┃ ┃ ┃ ┗ 📜tmap.ts
    ┃ ┃ ┣ 📜Alarm.ts
    ┃ ┃ ┣ 📜Auth.ts
    ┃ ┃ ┣ 📜Board.ts
    ┃ ┃ ┣ 📜Bus.ts
    ┃ ┃ ┣ 📜Chat.ts
    ┃ ┃ ┣ 📜Crew.ts
    ┃ ┃ ┣ 📜Feed.ts
    ┃ ┃ ┣ 📜Follow.ts
    ┃ ┃ ┣ 📜Forest.ts
    ┃ ┃ ┣ 📜Market.ts
    ┃ ┃ ┣ 📜Meal.ts
    ┃ ┃ ┣ 📜Profile.ts
    ┃ ┃ ┣ 📜Recommend.ts
    ┃ ┃ ┣ 📜Recruit.ts
    ┃ ┃ ┗ 📜User.ts
    ┃ ┣ 📂constants
    ┃ ┃ ┣ 📜api.ts
    ┃ ┃ ┣ 📜index.ts
    ┃ ┃ ┗ 📜token.ts
    ┃ ┣ 📂utils
    ┃ ┃ ┣ 📜axios.ts
    ┃ ┃ ┗ 📜saramin.ts
    ┃ ┗ 📜firebase.ts
    ┣ 📂assets
    ┃ ┗ 📂img
    ┃ ┃ ┣ 📂Btn
    ┃ ┃ ┣ 📂imgBtn
    ┃ ┃ ┣ 📂logoImg
    ┃ ┃ ┣ 📂MenuIcon
    ┃ ┃ ┣ 📂ProfileIcons
    ┃ ┃ ┣ 📂socialLoginIcons
    ┃ ┃ ┣ 📂TabBar
    ┃ ┃ ┣ 📂testImg
    ┃ ┃ ┣ 📂userIcons
    ┃ ┃ ┣ 📂userLoginIcons
    ┣ 📂components
    ┃ ┣ 📂All
    ┃ ┃ ┣ 📂Board
    ┃ ┃ ┃ ┣ 📂BoardCreate
    ┃ ┃ ┃ ┃ ┣ 📜CheckAnonymous.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CreateContent.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CreateTitle.tsx
    ┃ ┃ ┃ ┃ ┗ 📜SelectCategory.tsx
    ┃ ┃ ┃ ┣ 📂BoardList
    ┃ ┃ ┃ ┃ ┣ 📜BoardCardList.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardCardListItem.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardCommentItem.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardCommentList.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardCreateModal.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardMoreModal.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardRecommentItem.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardRecommentList.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardSortTab.tsx
    ┃ ┃ ┃ ┃ ┣ 📜BoardUpdateModal.tsx
    ┃ ┃ ┃ ┃ ┗ 📜SearchBarOnly.tsx
    ┃ ┃ ┃ ┣ 📂BoardMenu
    ┃ ┃ ┃ ┃ ┣ 📜MenuBar.tsx
    ┃ ┃ ┃ ┃ ┗ 📜MenuHeader.tsx
    ┃ ┃ ┃ ┗ 📜BoardBtn.tsx
    ┃ ┃ ┣ 📂Crew
    ┃ ┃ ┃ ┣ 📂CrewList
    ┃ ┃ ┃ ┃ ┣ 📜CrewCardList.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CrewCardListItem.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CrewCommentItem.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CrewCommentList.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CrewCreateModal.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CrewMoreModal.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CrewRecommentItem.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CrewRecommentList.tsx
    ┃ ┃ ┃ ┃ ┣ 📜CrewSortTab.tsx
    ┃ ┃ ┃ ┃ ┗ 📜SearchBar.tsx
    ┃ ┃ ┃ ┗ 📜ToggleBtn.tsx
    ┃ ┃ ┗ 📂Recruitment
    ┃ ┃ ┃ ┣ 📜FlipCard.tsx
    ┃ ┃ ┃ ┣ 📜FlipCardList.tsx
    ┃ ┃ ┃ ┣ 📜RecruitmentSaramin.tsx
    ┃ ┃ ┃ ┗ 📜RecruitSortTab.tsx
    ┃ ┣ 📂BambooForest
    ┃ ┃ ┣ 📂comment
    ┃ ┃ ┃ ┣ 📜BambooComment.tsx
    ┃ ┃ ┃ ┣ 📜BambooCommentItem.tsx
    ┃ ┃ ┃ ┗ 📜BambooCommentList.tsx
    ┃ ┃ ┣ 📜BambooForestBack.tsx
    ┃ ┃ ┣ 📜BambooForestContent.tsx
    ┃ ┃ ┣ 📜BambooForestInfo.tsx
    ┃ ┃ ┣ 📜BambooForestList.tsx
    ┃ ┃ ┣ 📜BambooForestListItem.tsx
    ┃ ┃ ┣ 📜BambooMoreModal.tsx
    ┃ ┃ ┗ 📜BambooWriteModal.tsx
    ┃ ┣ 📂Common
    ┃ ┃ ┣ 📜BackBtn.tsx
    ┃ ┃ ┣ 📜BackBtnHeader.tsx
    ┃ ┃ ┣ 📜BottomNavBar.tsx
    ┃ ┃ ┣ 📜CenterHeader.tsx
    ┃ ┃ ┣ 📜ExitBtn.tsx
    ┃ ┃ ┣ 📜Footer.tsx
    ┃ ┃ ┣ 📜Modal.tsx
    ┃ ┃ ┣ 📜PlusBtn.tsx
    ┃ ┃ ┗ 📜SubmitBtn.tsx
    ┃ ┣ 📂DirectMessage
    ┃ ┃ ┣ 📜Chat.tsx
    ┃ ┃ ┣ 📜ChatHeaderProfile.tsx
    ┃ ┃ ┣ 📜ChattingRoomListItem.tsx
    ┃ ┃ ┣ 📜SpeechBubble.tsx
    ┃ ┃ ┗ 📜util.ts
    ┃ ┣ 📂Feed
    ┃ ┃ ┣ 📂Alarm
    ┃ ┃ ┃ ┣ 📜AlarmItem.tsx
    ┃ ┃ ┃ ┣ 📜AlarmItemList.tsx
    ┃ ┃ ┃ ┗ 📜Notification.tsx
    ┃ ┃ ┣ 📂Comment
    ┃ ┃ ┃ ┣ 📜CommentInput.tsx
    ┃ ┃ ┃ ┣ 📜CommentItem.tsx
    ┃ ┃ ┃ ┣ 📜CommentList.tsx
    ┃ ┃ ┃ ┣ 📜CommentModal.tsx
    ┃ ┃ ┃ ┣ 📜RecommentItem.tsx
    ┃ ┃ ┃ ┗ 📜RecommentList.tsx
    ┃ ┃ ┣ 📂FeedCreate
    ┃ ┃ ┃ ┣ 📜FeedContentInput.tsx
    ┃ ┃ ┃ ┣ 📜ImgCropper.tsx
    ┃ ┃ ┃ ┣ 📜ImgEdit.tsx
    ┃ ┃ ┃ ┣ 📜ImgUploader.tsx
    ┃ ┃ ┃ ┣ 📜SelectHashtag.tsx
    ┃ ┃ ┃ ┗ 📜TextArea.tsx
    ┃ ┃ ┣ 📂FeedDetail
    ┃ ┃ ┃ ┗ 📜FeedDetailContent.tsx
    ┃ ┃ ┣ 📂FeedMain
    ┃ ┃ ┃ ┣ 📜FeedContent.tsx
    ┃ ┃ ┃ ┣ 📜FeedHeader.tsx
    ┃ ┃ ┃ ┣ 📜FeedLikeCnt.tsx
    ┃ ┃ ┃ ┣ 📜FeedList.tsx
    ┃ ┃ ┃ ┣ 📜FeedListItem.tsx
    ┃ ┃ ┃ ┣ 📜FeedListItemBtn.tsx
    ┃ ┃ ┃ ┣ 📜FeedListItemImg.tsx
    ┃ ┃ ┃ ┗ 📜FeedListItemUser.tsx
    ┃ ┃ ┣ 📂Search
    ┃ ┃ ┃ ┣ 📜HashSearchItem.tsx
    ┃ ┃ ┃ ┣ 📜HashSearchList.tsx
    ┃ ┃ ┃ ┣ 📜SearchResult.tsx
    ┃ ┃ ┃ ┗ 📜UserItemList.tsx
    ┃ ┃ ┣ 📂UserRecommend
    ┃ ┃ ┃ ┣ 📜UserRecommendList.tsx
    ┃ ┃ ┃ ┗ 📜UserRecommendListItem.tsx
    ┃ ┃ ┗ 📂utils
    ┃ ┃ ┃ ┣ 📜FollowBtn.tsx
    ┃ ┃ ┃ ┣ 📜ImgBtn.tsx
    ┃ ┃ ┃ ┣ 📜RoundImg.tsx
    ┃ ┃ ┃ ┣ 📜SearchBar.tsx
    ┃ ┃ ┃ ┣ 📜SignupHashTag.tsx
    ┃ ┃ ┃ ┗ 📜UserItem.tsx
    ┃ ┣ 📂ImgHandle
    ┃ ┃ ┣ 📜DataToFile.ts
    ┃ ┃ ┗ 📜ImgCompress.tsx
    ┃ ┣ 📂Now
    ┃ ┃ ┣ 📂BoardMenu
    ┃ ┃ ┃ ┗ 📜MenuBar.tsx
    ┃ ┃ ┣ 📂BusRealTime
    ┃ ┃ ┣ 📂Market
    ┃ ┃ ┃ ┣ 📜AddPhoto.tsx
    ┃ ┃ ┃ ┣ 📜MarketCardList.tsx
    ┃ ┃ ┃ ┣ 📜MarketCardListItem.tsx
    ┃ ┃ ┃ ┣ 📜MarketCreateModal.tsx
    ┃ ┃ ┃ ┣ 📜MarketMoreModal.tsx
    ┃ ┃ ┃ ┣ 📜MarketPriceInput.tsx
    ┃ ┃ ┃ ┣ 📜MarketSortTab.tsx
    ┃ ┃ ┃ ┗ 📜ToggleBtn.tsx
    ┃ ┃ ┗ 📂MealPlanner
    ┃ ┃ ┃ ┣ 📜BarChart.tsx
    ┃ ┃ ┃ ┣ 📜ImgToText.tsx
    ┃ ┃ ┃ ┣ 📜MealPlan.tsx
    ┃ ┃ ┃ ┣ 📜MealPlannerComp.tsx
    ┃ ┃ ┃ ┣ 📜NoMealPlannerComp.tsx
    ┃ ┃ ┃ ┣ 📜SelectCampus.tsx
    ┃ ┃ ┃ ┗ 📜TodayDate.tsx
    ┃ ┣ 📂Profile
    ┃ ┃ ┣ 📂Follow
    ┃ ┃ ┃ ┣ 📜FollowProfileList.tsx
    ┃ ┃ ┃ ┗ 📜FollowProfileListItem.tsx
    ┃ ┃ ┣ 📂MyContents
    ┃ ┃ ┃ ┣ 📜ContentFeedSection.tsx
    ┃ ┃ ┃ ┣ 📜ContentPortfolioSection.tsx
    ┃ ┃ ┃ ┣ 📜ContentSavedSection.tsx
    ┃ ┃ ┃ ┣ 📜ContentTabBar.tsx
    ┃ ┃ ┃ ┗ 📜MyContentsContainer.tsx
    ┃ ┃ ┣ 📂ProfileMain
    ┃ ┃ ┃ ┣ 📜FollowButton.tsx
    ┃ ┃ ┃ ┣ 📜ProfileContainer.tsx
    ┃ ┃ ┃ ┣ 📜ProfileHeader.tsx
    ┃ ┃ ┃ ┣ 📜ProfileImageContainer.tsx
    ┃ ┃ ┃ ┣ 📜ProfileIntroduction.tsx
    ┃ ┃ ┃ ┣ 📜ProfileLinkList.tsx
    ┃ ┃ ┃ ┣ 📜ProfileSection.tsx
    ┃ ┃ ┃ ┗ 📜ProfileSetting.tsx
    ┃ ┃ ┗ 📂Saved
    ┃ ┃ ┃ ┣ 📜SavedBoardList.tsx
    ┃ ┃ ┃ ┣ 📜SavedFeedList.tsx
    ┃ ┃ ┃ ┗ 📜SavedRecruitmentList.tsx
    ┃ ┗ 📂User
    ┃ ┃ ┣ 📂Login
    ┃ ┃ ┃ ┣ 📜Forgotpw.tsx
    ┃ ┃ ┃ ┣ 📜LoginBtn.tsx
    ┃ ┃ ┃ ┣ 📜LoginForm.tsx
    ┃ ┃ ┃ ┣ 📜LoginHeader.tsx
    ┃ ┃ ┃ ┗ 📜SignupBtn.tsx
    ┃ ┃ ┣ 📂Signup
    ┃ ┃ ┃ ┣ 📜LifeBtn.tsx
    ┃ ┃ ┃ ┣ 📜NickNameData.json
    ┃ ┃ ┃ ┣ 📜ProgressBar.tsx
    ┃ ┃ ┃ ┣ 📜RandomNicknameGenerator.tsx
    ┃ ┃ ┃ ┣ 📜SelectTagForm.tsx
    ┃ ┃ ┃ ┣ 📜SignupForm.tsx
    ┃ ┃ ┃ ┗ 📜WorkBtn.tsx
    ┃ ┃ ┣ 📂UserInfo
    ┃ ┃ ┃ ┣ 📜ImageCropper.tsx
    ┃ ┃ ┃ ┣ 📜ProfileImage.tsx
    ┃ ┃ ┃ ┣ 📜UserInformation.tsx
    ┃ ┃ ┃ ┗ 📜UserProfile.tsx
    ┃ ┃ ┣ 📂UserUpdate
    ┃ ┃ ┃ ┣ 📜UserUpdateForm.tsx
    ┃ ┃ ┃ ┗ 📜UserUpdateHeader.tsx
    ┃ ┃ ┣ 📜SsafyAuth.tsx
    ┃ ┃ ┗ 📜UserLeave.tsx
    ┣ 📂firebase
    ┃ ┗ 📜UploadImage.tsx
    ┣ 📂pages
    ┃ ┣ 📂All
    ┃ ┃ ┣ 📂Board
    ┃ ┃ ┃ ┗ 📜BoardList.tsx
    ┃ ┃ ┣ 📂Crew
    ┃ ┃ ┃ ┗ 📜CrewList.tsx
    ┃ ┃ ┣ 📂Recruitment
    ┃ ┃ ┃ ┗ 📜RecruitementList.tsx
    ┃ ┃ ┗ 📜AllMenu.tsx
    ┃ ┣ 📂BambooForest
    ┃ ┃ ┗ 📜BambooForest.tsx
    ┃ ┣ 📂DirectMessage
    ┃ ┃ ┣ 📜DirectMessageChats.tsx
    ┃ ┃ ┣ 📜DirectMessageChattingRoom.tsx
    ┃ ┃ ┗ 📜DirectMessageCreate.tsx
    ┃ ┣ 📂Feed
    ┃ ┃ ┣ 📜AlarmDetail.tsx
    ┃ ┃ ┣ 📜FeedCreate.tsx
    ┃ ┃ ┣ 📜FeedDetail.tsx
    ┃ ┃ ┣ 📜FeedMain.tsx
    ┃ ┃ ┣ 📜FeedSearch.tsx
    ┃ ┃ ┗ 📜FeedUpdate.tsx
    ┃ ┣ 📂Now
    ┃ ┃ ┣ 📂BusRealTime
    ┃ ┃ ┃ ┣ 📜BusRealTimeMap.tsx
    ┃ ┃ ┃ ┣ 📜BusRealTimeSelect.tsx
    ┃ ┃ ┃ ┗ 📜Tmap.tsx
    ┃ ┃ ┣ 📂Market
    ┃ ┃ ┃ ┗ 📜MarketList.tsx
    ┃ ┃ ┣ 📂MealPlanner
    ┃ ┃ ┃ ┣ 📜MealPlannerCreate.tsx
    ┃ ┃ ┃ ┣ 📜MealPlannerView.tsx
    ┃ ┃ ┃ ┗ 📜SelectCampusMeal.tsx
    ┃ ┃ ┗ 📜NowMenu.tsx
    ┃ ┣ 📂Profile
    ┃ ┃ ┣ 📜FollowerList.tsx
    ┃ ┃ ┣ 📜FollowingList.tsx
    ┃ ┃ ┗ 📜ProfileMain.tsx
    ┃ ┗ 📂User
    ┃ ┃ ┣ 📜UserAuth.tsx
    ┃ ┃ ┣ 📜UserDetail.tsx
    ┃ ┃ ┣ 📜UserLeave.tsx
    ┃ ┃ ┣ 📜UserLogin.tsx
    ┃ ┃ ┣ 📜UserSelectTag.tsx
    ┃ ┃ ┣ 📜UserSignup.tsx
    ┃ ┃ ┗ 📜UserUpdate.tsx
    ┣ 📂store
    ┃ ┣ 📂reducers
    ┃ ┃ ┗ 📜user.ts
    ┃ ┣ 📜hooks.ts
    ┃ ┣ 📜rootReducer.ts
    ┃ ┗ 📜slice.ts
    ┣ 📜App.tsx
    ┣ 📜index.tsx
    ┣ 📜react-app-env.d.ts
    ┗ 📜store.ts
 </details>

<details>
  <summary>
  백엔드 디렉토리 구조
  </summary>

    📦src
    ┣ 📂main
    ┃ ┣ 📂generated
    ┃ ┣ 📂java
    ┃ ┃ ┗ 📂com
    ┃ ┃ ┃ ┗ 📂ssafying
    ┃ ┃ ┃ ┃ ┣ 📂domain
    ┃ ┃ ┃ ┃ ┃ ┣ 📂alert
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NotificationController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindListNotificationResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SseResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Notification.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NotificationTypeStatus.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmitterRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NotificationRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NotificationService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂bamboo
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BambooController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddBambooCommentRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AddBambooRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BambooCommentResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindDetailBambooResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FindListBambooResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜testDTO.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Bamboo.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BambooComment.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jdbc
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BambooCommentRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BambooRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BambooService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂board
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BoardController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddBoardCommentRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddBoardRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜DetailBoardResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedScrapExistRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ModifyBoardCommentRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ModifyBoardRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RemoveBoardCommentRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ScrapBoardRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindDetailBoardResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FindListBoardResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChildCommentDTO.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParentCommentDTO.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Board.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardComment.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardScrap.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CategoryStatus.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jdbc
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardCommentRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BoardScarpRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂command
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AddBoardCommentCommand.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BoardService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂chat
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatRoomExitRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatMessageDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomUserDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChattingRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜InviteChatRoomRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatMessage.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoom.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomUser.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MessageUnreadUser.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RoomType.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜InsufficientUsersException.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatMessageRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatRoomUserRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂crew
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CrewController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddCrewCommentRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddCrewRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ModifyCrewRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddCrewResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CrewDetailResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CrewListResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂specification
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CrewSpecification.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Category.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Crew.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CrewComment.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Region.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ExceptionAdvisor.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jdbc
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CrewCommentsRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CrewRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CrewService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂feed
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FeedController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddCommentRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddFeedRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ModifyFeedRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaveFeedCommentLikeRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaveFeedScrapRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SaveLikeFeedRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜DetailFeedResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜GetFeedLikesResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜GetFeedResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedHashtagDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedImageDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FeedSpecification.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Feed.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedComment.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedCommentLike.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedHashtag.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedImage.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedLike.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FeedScrap.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedCommentLikeRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedCommentRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedHashtagRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedImageRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedLikeRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedScrapRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HashtagRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FeedService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂follow
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FollowController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddFollowRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindByNicknameRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UnFollowRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindFollowerListResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindFollowingListResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindRecommendResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FollowResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Follow.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jdbc
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FollowRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FollowService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂market
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MarketController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddMarketRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ModifyMarketRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MarketDetailResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MarketListResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Market.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MarketImage.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MarketWay.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jdbc
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MarketImageRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MarketRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MarketService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂meal
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MealController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddMealRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ModifyMealRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜VoteMealRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FindMealPlannerResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MealPlanner.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MealVote.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jdbc
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MealRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MealVoteRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MealService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂mypage
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MypageController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ModifyReadmeRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PortfolioModifyRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SavePortfolioRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindAuthoredFeedsResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindListUsedHashtagResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FindMypageResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FindReadmeResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PortfolioDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Portfolio.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PortfolioType.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PortfolioRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MypageService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂recruitment
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RecruitmentController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CreatePortfolioRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜DeletePortfolioRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaveRecruitmentScrapRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UpdatePortfolioRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SaraminResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RecruitmentScrap.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RecruitmentScrapRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RecruitmentService.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂shuttle
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ShuttleController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddBusStopRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BusStopListRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserLocationRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BusStopListResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserLocationResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BusStop.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Campus.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CampusRegion.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Shuttle.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jdbc
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BusStopRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CampusRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ShuttleRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BusStopService.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ShuttleService.java
    ┃ ┃ ┃ ┃ ┃ ┗ 📂user
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserApiController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserAuthController.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddInterestTagRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CreateAccessTokenRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CreateUserRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LogoutRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RemoveUserRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜StudentAuthRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UpdateUserRequest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂response
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AddInterestTagResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CreateAccessTokenResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ModifyUserResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserDetailResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CampusDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginHeaderDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SimpleUserDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserInfoDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜InterestTag.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Student.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜User.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserStatus.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jdbc
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜InterestTagRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜StudentRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserAuthService.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserService.java
    ┃ ┃ ┃ ┃ ┣ 📂global
    ┃ ┃ ┃ ┃ ┃ ┣ 📂config
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jwt
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RefreshToken.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RefreshTokenRepository.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RefreshTokenService.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TokenService.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜JwtProperties.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TokenProvider.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜StompConfiguration.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SwaggerConfig.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChildCommentDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜HashtagDto.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParentCommentDto.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BaseTimeEntity.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Hashtag.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂result
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ErrorResultResponse.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ResultResponse.java
    ┃ ┃ ┃ ┃ ┃ ┗ 📂util
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StringUtil.java
    ┃ ┃ ┃ ┃ ┗ 📜SsafyingApplication.java
    ┃ ┗ 📂resources
    ┃ ┃ ┣ 📂db
    ┃ ┃ ┃ ┗ 📜data.sql
    ┃ ┃ ┣ 📜application-local.yml
    ┃ ┃ ┣ 📜application-prod.yml
    ┃ ┃ ┣ 📜application.yml
    ┃ ┃ ┣ 📜banner.txt
    ┃ ┃ ┗ 📜secret.properties
    ┗ 📂test
    ┃ ┣ 📂generated_tests
    ┃ ┣ 📂java
    ┃ ┃ ┗ 📂com
    ┃ ┃ ┃ ┗ 📂ssafying
    ┃ ┃ ┃ ┃ ┣ 📂domain
    ┃ ┃ ┃ ┃ ┃ ┣ 📂board
    ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BoardServiceTest.java
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
    ┃ ┃ ┃ ┃ ┃ ┣ 📂chat
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatServiceTest.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂crew
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CrewServiceTest.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂feed
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
    ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FeedServiceTest.java
    ┃ ┃ ┃ ┃ ┃ ┣ 📂jwt
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TokenServiceTest.java
    ┃ ┃ ┃ ┃ ┃ ┗ 📂user
    ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserServiceTest.java
    ┃ ┃ ┃ ┃ ┣ 📂util
    ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
    ┃ ┃ ┃ ┃ ┗ 📜SsafyingApplicationTests.java
    ┃ ┗ 📂resources
    ┃ ┃ ┗ 📜application.yml
 </details>

