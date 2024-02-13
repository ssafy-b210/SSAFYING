import UserInformation from "../../components/User/UserInfo/UserInformation";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import CenterHeader from "../../components/Common/CenterHeader";
import ProfileImage from "../../components/User/UserInfo/ProfileImage";
import { useState } from "react";

function UserDetail() {
  const [profileDownloadUrl, setProfileDownloadUrl] = useState<string | null>(
    null
  );

  const handleProfileDownloadUrlChange = (downloadUrl: string) => {
    setProfileDownloadUrl(downloadUrl);
  };
  return (
    <div>
      <CenterHeader />
      <BackBtnHeader
        backLink="/profile"
        isCenter={true}
        htext={<h2>회원정보</h2>}
      ></BackBtnHeader>
      <ProfileImage onDownloadUrlChange={handleProfileDownloadUrlChange} />
      <UserInformation profileDownloadUrl={profileDownloadUrl} />
    </div>
  );
}

export default UserDetail;
