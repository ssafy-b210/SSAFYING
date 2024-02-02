package com.ssafying.domain.chat.dto;

import com.ssafying.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomInviteRequest {
    private int chatRoomId;
    private List<User> users; // 초대할 유저들
}
