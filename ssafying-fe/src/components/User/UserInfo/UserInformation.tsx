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

function UserInformation(props: { profileDownloadUrl: string | null }) {
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

  // console.log("확인용링크", props.profileDownloadUrl);
  const handleSaveClick = () => {
    //바이오링크 저장 로직 추가.
    let {
      nickname,
      phoneNumber,
      password,
      password2,
      intro,
      profileDownloadUrl,
    } = editedUserInfo;

    profileDownloadUrl = props.profileDownloadUrl;

    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

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
              <SignUpInput className="input-area">
                <input
                  type="text"
                  id="nickname"
                  placeholder=" "
                  name="nickname"
                  value={editedUserInfo?.nickname || ""}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="nickname">닉네임</label>
              </SignUpInput>
              <SignUpInput className="input-area">
                <input
                  type="password"
                  placeholder=" "
                  name="password"
                  value={editedUserInfo?.password || ""}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="password">비밀번호</label>
              </SignUpInput>
              <SignUpInput className="input-area">
                <input
                  type="password"
                  placeholder=" "
                  name="password2"
                  value={editedUserInfo?.password2 || ""}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="password">비밀번호 확인</label>
              </SignUpInput>
              <SignUpInput className="input-area">
                <input
                  type="tel"
                  placeholder=" "
                  name="phoneNumber"
                  value={editedUserInfo?.phoneNumber || ""}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="phoneNumber">
                  전화번호를 입력해주세요 (010-nnnn-nnnn 형식으로 입력해주세요)
                </label>
              </SignUpInput>
              <SignUpInput className="input-area">
                <input
                  type="text"
                  placeholder=" "
                  name="intro"
                  value={editedUserInfo?.intro || ""}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="intro">한줄 소개를 입력해주세요</label>
              </SignUpInput>
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
  height: 600px;
  width: 80%;
  padding: 20px;
  .category {
    color: black;
    width: 70%;
    position: relative;
    padding-top: 20px;
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
  margin-top: 20px;
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
  margin-top: 20px;
  position: relative;
`;

const MyIntroduction = styled.div`
  text-align: center;
  margin-top: 10px;
  h3 {
    margin-top: 0;
  }
`;

const SignUpInput = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 15px;

  .passwdCheck {
    font-size: 12px;
    color: red;
  }

  .input-area {
    width: 70%;
    position: relative;
    font-size: 18px;
    margin-top: 20px;
  }

  input {
    width: 60%;
    height: 30px;
    border: none;
    border-bottom: 2px solid gray;
    border-radius: 0;
    outline: none;
    min-width: 60vmin;
    font-size: 15px;
    padding-bottom: 5px;
    background-color: transparent;
    padding-left: 10px;
    padding-top: 20px;
    font-family: "Noto Sans KR", "Noto Sans";
  }
  label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: transform 0.3s ease-out;
    padding-left: 10px;
    font-size: 15px;
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-150%);
    font-size: 12px;
  }
`;
