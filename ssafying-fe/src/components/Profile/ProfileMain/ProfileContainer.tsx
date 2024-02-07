import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import ProflieSection from "./ProfileSection";
import ProflieSetting from "./ProfileSetting";
import { selectMyPageDetail } from "../../../apis/api/Profile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type ProfileDetailType = {
  nickname: string;
  profileImageUrl: string;
  intro: string;
};

function ProflieContainer() {
  // const userId = useParams().userId;
  const [profileDetail, setProfileDetail] = useState<ProfileDetailType>({
    nickname: "",
    profileImageUrl: "",
    intro: "",
  });

  async function getProfile() {
    // const res = await selectMyPageDetail(Number(userId));

    const res: ProfileDetailType = {
      nickname: "aeong",
      profileImageUrl: "",
      intro:
        "이애옹이올시다\n싸피 10기 팀제주도 팀장이라구요\naeong123@github.com",
    };

    setProfileDetail(res);
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <StyledProfileContainer>
      <ProfileHeader nickname={profileDetail.nickname} />
      <ProflieSection
        profileImageUrl={profileDetail.profileImageUrl}
        intro={profileDetail.intro}
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
