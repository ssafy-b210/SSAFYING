import styled from "styled-components";
import BackBtnHeader from "../../components/Common/BackBtnHeader";
import CenterHeader from "../../components/Common/CenterHeader";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/reducers/user";
import { selectFollowingList } from "../../apis/api/Follow";
import RoundImg from "../../components/Feed/utils/RoundImg";
import { createChattingRoom } from "../../apis/api/Chat";
import { useNavigate } from "react-router";

type Following = {
  id: number;
  nickname: string;
  profileImageUrl: string;
};

type InvitedUser = Following & {
  selected: boolean;
};

function DirectMessageCreate() {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const createButtonComponent = (
    <CreateButton onClick={handleClickCreateButton}>확인</CreateButton>
  );

  const [followingList, setFollowingList] = useState<InvitedUser[]>([]);

  useEffect(() => {
    getFollowingList();
  }, []);

  // 대화 상대 리스트 조회
  async function getFollowingList() {
    const res = await selectFollowingList(user.userId);

    if (res) {
      const invitedUserList: InvitedUser[] = res.data.map((item: Following) => {
        return { ...item, selected: false };
      });

      setFollowingList(invitedUserList);
    }
  }

  // 채팅방 생성 버튼 Click event handler
  async function handleClickCreateButton() {
    const selectedUsers = followingList.filter((item) => item.selected);

    if (selectedUsers.length === 0) {
      alert("대화 상태를 선택해주세요.");
      return;
    }

    const selectedUsersId = selectedUsers.map((user) => user.id);
    const res = await createChattingRoom([...selectedUsersId, user.userId]);
    navigate(`/chat/${res}`);
  }

  // 대화 상대 리스트 Click event handler
  function handleClickInvite(user: InvitedUser) {
    const index = followingList.indexOf(user);
    const temp = JSON.parse(JSON.stringify(followingList));

    // 대화 상대 선택/취소
    temp[index].selected = !temp[index].selected;

    setFollowingList(temp);
  }

  return (
    <div>
      <CenterHeader />
      <BackBtnHeader
        backLink="/chat"
        isCenter={true}
        text="대화 상대 초대"
        extraBtn={createButtonComponent}
      />
      <FollowingListContainer>
        {followingList &&
          followingList.map((item: InvitedUser) => {
            return (
              <FollowingProfileList
                key={item.id}
                onClick={() => handleClickInvite(item)}
              >
                <ProfileContainer>
                  <RoundImg size="54" src={item.profileImageUrl} />
                  <div className="nickname">{item.nickname}</div>
                </ProfileContainer>
                <CheckButtonContainer>
                  {item.selected ? (
                    <div className="cancel">취소</div>
                  ) : (
                    <div className="select">선택</div>
                  )}
                </CheckButtonContainer>
              </FollowingProfileList>
            );
          })}
      </FollowingListContainer>
    </div>
  );
}

export default DirectMessageCreate;

const CreateButton = styled.button`
  width: 60px;
  padding: 8px 6px;
  color: #fff;
  border: none;
  border-radius: 4px;
  background-color: #565cf8;
  cursor: pointer;
`;

const FollowingListContainer = styled.div`
  padding: 12px;
  cursor: pointer;
`;

const FollowingProfileList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  img {
    margin-right: 16px;
  }
`;

const CheckButtonContainer = styled.div`
  div {
    padding: 0 12px;
  }

  .select {
    color: #565cf8;
  }

  .cancel {
    color: #f93737;
  }
`;
