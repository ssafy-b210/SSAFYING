import { useEffect, useState } from "react";
import styled from "styled-components";
import { selectOneUserInfo } from "../../../apis/api/User";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

function UserInformation() {
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
    <div>
      <BigContainer>
        <UserInfoContainer>
          {userInfo ? (
            <>
              <div className="category">닉네임</div>
              <div className="content">{userInfo.nickname}</div>
              <div className="category">전화번호</div>
              <div className="content">{userInfo.phoneNumber}</div>
              <div className="category">한줄 소개</div>
              <div className="content">
                {userInfo.intro === null
                  ? "아직 한줄 소개가 없습니다. 한줄 소개 글을 작성해주세요!"
                  : userInfo.intro}
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
          <div className="category">바이오링크</div>
          <div className="content">aeong123@github.com</div>
        </UserInfoContainer>
      </BigContainer>
    </div>
  );
}

export default UserInformation;

const UserInfoContainer = styled.div`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  height: 500px;
  width: 80%;
  padding: 20px;
  .category {
    color: black;
    font-weight: bold;
    padding-top: 15px;
    font-family: "Noto Sans KR", "Noto Sans";
  }
  .content {
    padding-top: 10px;
    padding-left: 15px;
    font-family: "Noto Sans KR", "Noto Sans";
  }
`;

const BigContainer = styled.div`
  display: flex;
  justify-content: center;
`;
