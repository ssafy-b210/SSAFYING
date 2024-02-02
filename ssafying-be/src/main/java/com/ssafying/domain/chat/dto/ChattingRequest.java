package com.ssafying.domain.chat.dto;

import lombok.Getter;

@Getter
public class ChattingRequest {
    private int chatRoomId; // 채팅방 id
    private int userId; // 유저 id
    private String message; // 채팅메시지
}
