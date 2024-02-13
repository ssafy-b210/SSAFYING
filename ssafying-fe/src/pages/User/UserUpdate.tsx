import { useState, useEffect } from "react";
import UserProfile from "../../components/User/UserInfo/UserProfile";
import UserUpdateForm from "../../components/User/UserUpdate/UserUpdateForm";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import { selectOneUserInfo } from "../../apis/api/User";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";

interface UserData {
  nickname: string;
  phoneNumber: string;
  intro: string | null;
}

function UserUpdate() {
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await selectOneUserInfo(user.userId);
        setUserInfo(response.resultData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <BackBtnHeader
        backLink="/"
        htext={<h2>회원정보 수정</h2>}
        isCenter={true}
      ></BackBtnHeader>
      {/* userData prop에 null이 할당될 수 있도록 코드 수정 */}
      {/* <UserUpdateForm userData={userInfo} /> */}
    </div>
  );
}

export default UserUpdate;
