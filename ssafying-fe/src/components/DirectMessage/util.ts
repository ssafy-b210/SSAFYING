type JoinUserInfo = [
  {
    id: number;
    nickname: string;
    profileImageUrl: string;
  }
];

// 채팅방 이름 반환
export function getChattingRoomName(
  joinUserInfo: JoinUserInfo,
  userNickname: string
): string {
  let text = "";

  // 채팅방 유저 이름 나열 텍스트 getter
  for (let i = 0; i < joinUserInfo.length; i++) {
    const nickname = joinUserInfo[i].nickname;

    // 내 닉네임은 나오지 않도록
    if (nickname === userNickname) continue;

    // 닉네임 나열
    if (text.length === 0) text += nickname;
    else text += ", " + nickname;
  }

  return text;
}
