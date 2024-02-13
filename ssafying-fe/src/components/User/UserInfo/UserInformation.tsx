import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { useNavigate } from "react-router-dom";
import {
  leaveUser,
  selectOneUserInfo,
  updateUserInfo,
} from "../../../apis/api/User";

function UserInformation({
  profileDownloadUrl,
}: {
  profileDownloadUrl: string | null;
}) {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUserInfo, setEditedUserInfo] = useState<any>(null);

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

  useEffect(() => {}, [userInfo]);

  const handleEditClick = () => {
    setIsEditMode(true);
    setEditedUserInfo(userInfo);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    setEditedUserInfo(null);
  };

  console.log("확인용링크", profileDownloadUrl);
  const handleSaveClick = () => {
    //바이오링크 저장 로직 추가.
    const { nickname, phoneNumber, password, intro, profileDownloadUrl } =
      editedUserInfo;

    // if (password !== password2) {
    //   alert("비밀번호가 일치하지 않습니다.");
    //   return;
    // }

    updateUserInfo(
      user.userId,
      nickname,
      phoneNumber,
      password,
      intro,
      profileDownloadUrl
    );

    setIsEditMode(false);
    setUserInfo(editedUserInfo);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUserInfo({ ...editedUserInfo, [name]: value });
  };

  const goToLeave = () => {
    try {
      var password = prompt(
        "SSAFYING 탈퇴",
        "탈퇴하시려면 비밀번호를 다시 한번 입력해주세요."
      );
      if (password === user.password) {
        leaveUser(user.userId, password);
        navigate("/user/leave");
      } else {
        alert("올바른 비밀번호를 입력해주세요");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Profile>
        <MyIntroduction>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </MyIntroduction>
      </Profile>
      <BigContainer>
        <UserInfoContainer>
          {isEditMode ? (
            <>
              <div className="category">닉네임</div>
              <input
                type="text"
                name="nickname"
                value={editedUserInfo?.nickname || ""}
                onChange={handleInputChange}
              />
              <div className="category">비밀번호</div>
              <input
                type="password"
                name="password"
                value={editedUserInfo?.password || ""}
                onChange={handleInputChange}
              />
              <div className="category">비밀번호 확인</div>
              <input
                type="password"
                name="password2"
                value={editedUserInfo?.password2 || ""}
                onChange={handleInputChange}
              />
              <div className="category">전화번호</div>
              <input
                type="text"
                name="phoneNumber"
                value={editedUserInfo?.phoneNumber || ""}
                onChange={handleInputChange}
              />
              <div className="category">한줄 소개</div>
              <input
                type="text"
                name="intro"
                value={editedUserInfo?.intro || ""}
                onChange={handleInputChange}
              />
              {/* <div className="category">바이오링크</div>
              <input
                type="text"
                name="bioLink"
                value={editedUserInfo?.bioLink || ""}
                onChange={handleInputChange}
              /> */}
              <UserButtonContainer>
                <UserButton onClick={handleSaveClick}>저장</UserButton>
                <UserButton className="outBtn" onClick={handleCancelClick}>
                  취소
                </UserButton>
              </UserButtonContainer>
            </>
          ) : (
            <>
              {userInfo ? (
                <>
                  <div className="category">닉네임</div>
                  <div className="content">{userInfo.nickname}</div>
                  <div className="category">전화번호</div>
                  <div className="content">{userInfo.phoneNumber}</div>
                  <div className="category">한줄 소개</div>
                  <div className="content">
                    {userInfo.intro === null
                      ? "(아직 한줄 소개가 없습니다. 한줄 소개 글을 작성해주세요!)"
                      : userInfo.intro}
                  </div>
                  <div className="category">바이오링크</div>
                  <div className="content">
                    {userInfo.bioLink === null
                      ? "(아직 바이오링크를 등록하지 않았습니다. 바이오링크는 최대 5개까지 작성이 가능합니다.)"
                      : userInfo.bioLink}
                  </div>
                </>
              ) : (
                <div>Loading...</div>
              )}
            </>
          )}
        </UserInfoContainer>
      </BigContainer>
      <UserButtonContainer>
        <UserButton onClick={handleEditClick}>수정하기</UserButton>
        <UserButton className="outBtn" onClick={goToLeave}>
          탈퇴하기
        </UserButton>
      </UserButtonContainer>
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

const UserButtonContainer = styled.div`
  .outBtn {
    background-color: #f93737;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
const UserButton = styled.button`
  background-color: #565cf8;
  border-radius: 10px;
  border: none;
  color: white;
  margin-right: 15px;
  margin-left: 15px;
  padding: 8px 12px;
  font-family: "Noto Sans KR", "Noto Sans";
`;

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
