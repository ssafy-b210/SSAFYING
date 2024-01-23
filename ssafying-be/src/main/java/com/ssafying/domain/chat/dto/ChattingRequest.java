package com.ssafying.domain.chat.dto;

import lombok.Getter;

@Getter
public class ChattingRequest {
    private int chatRoomId; // 유저 id
    private int userId;
    private String message; // 채팅메시지
}
