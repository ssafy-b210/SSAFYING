import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import ProflieSection from "./ProfileSection";
import ProflieSetting from "./ProfileSetting";
import { selectMyPageDetail } from "../../../apis/api/Profile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserRecommendList from "../../Feed/UserRecommend/UserRecommendList";

type ProfileDetailType = {
  nickname: string;
  profileImageUrl: string;
  intro: string; // 소개글
  feedCount: number;
  followerCount: number;
  followingCount: number;
};

function ProflieContainer() {
  const profileUserId = useParams().userId; // 현재 프로필 유저 아이디

  const [profileDetail, setProfileDetail] = useState<ProfileDetailType>({
    nickname: "",
    profileImageUrl: "",
    intro: "",
    feedCount: 0,
    followerCount: 0,
    followingCount: 0,
  });

  // 프로필 유저 정보 가져오기
  async function getProfile() {
    const res = await selectMyPageDetail(Number(profileUserId));

    if (res !== undefined) {
      const data = res.data.resultData;
      const userInfo = data.userInfo;

      setProfileDetail({
        nickname: userInfo.nickname,
        profileImageUrl: userInfo.profileImageUrl,
        intro: userInfo.intro,
        feedCount: data.feedCount,
        followerCount: data.followerCount,
        followingCount: data.followingCount,
      });
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <StyledProfileContainer>
      <ProfileHeader nickname={profileDetail.nickname} />
      <ProflieSection
        userId={Number(profileUserId)}
        profileImageUrl={profileDetail.profileImageUrl}
        intro={profileDetail.intro}
        feedCount={profileDetail.feedCount}
        followerCount={profileDetail.followerCount}
        followingCount={profileDetail.followingCount}
      />
      <ProflieSetting />
    </StyledProfileContainer>
  );
}

export default ProflieContainer;

const StyledProfileContainer = styled.div`
  position: relative;
  padding: 0 16px 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;
