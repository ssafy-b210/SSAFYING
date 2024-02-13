import styled from "styled-components";
import ProfileImage from "../UserInfo/ProfileImage";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { selectOneUserInfo } from "../../../apis/api/User";
import { useState, useEffect } from "react";

function UserProfileUpdate() {
  const user = useAppSelector(selectUser);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await selectOneUserInfo(user.userId);
        setUserInfo(userData.resultData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user.userId]);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <Profile>
      <ProfileImage />
      <MyIntroduction>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </MyIntroduction>
    </Profile>
  );
}
export default UserProfileUpdate;

const Profile = styled.div`
  margin-top: 15px;
  position: relative;
`;

const MyIntroduction = styled.div`
  text-align: center;
  margin-top: 10px;
  h3 {
    margin-top: 0;
  }
`;
